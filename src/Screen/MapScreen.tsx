import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';

const MapScreen: React.FC = () => {
  const [directions, setDirections] = useState<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [userLocation, setUserLocation] = useState<any>(null);
  const [isLocationLoading, setIsLocationLoading] = useState(true);
  const [isDirectionsLoading, setIsDirectionsLoading] = useState(false);

  const locations = [
    {
      id: 1,
      title: 'Sucursal Sur',
      description: 'Ubicada en el sur de Quito.',
      latitude: -0.32635,
      longitude: -78.54940,
    },
  ];

  const googleMapsApiKey = 'AIzaSyBuxWNDjHkFH0IM-WYtLR09FAPEyeyCOdA'; 

  
  const requestPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso de ubicación', 'Permiso de ubicación denegado', [{ text: 'OK' }]);
      return false;
    }
    return true;
  };

  
  const getUserLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude });
      setIsLocationLoading(false);
    } catch (error) {
      console.error('Error obteniendo ubicación:', error);
      Alert.alert('Error', 'No se pudo obtener la ubicación.');
      setIsLocationLoading(false);
    }
  };

 
  const fetchDirections = useCallback(async (destination: any) => {
    if (!userLocation) return;

    setIsDirectionsLoading(true);
    const origin = `${userLocation.latitude},${userLocation.longitude}`;
    const destinationCoords = `${destination.latitude},${destination.longitude}`;

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destinationCoords}&key=${googleMapsApiKey}`
      );

      if (response.data.status === 'OK' && response.data.routes.length > 0) {
        const route = response.data.routes[0].legs[0];
        setDirections(route);
      } else {
        throw new Error('No se encontraron direcciones');
      }
    } catch (error) {
      console.error('Error al obtener las direcciones:', error);
      Alert.alert('Error', 'Hubo un problema al obtener las direcciones.');
    } finally {
      setIsDirectionsLoading(false);
    }
  }, [userLocation]);

  
  const handleMarkerPress = (location: any) => {
    setSelectedLocation(location);
    fetchDirections(location);
  };

  useEffect(() => {
    const init = async () => {
      const hasPermission = await requestPermissions();
      if (hasPermission) {
        getUserLocation();
      }
    };
    init();
  }, []);

  if (isLocationLoading) {
    return <Text>Cargando ubicación...</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={location.title}
            description={location.description}
            onPress={() => handleMarkerPress(location)}
          />
        ))}

        {directions && selectedLocation && (
          <Polyline
            coordinates={[
              { latitude: userLocation.latitude, longitude: userLocation.longitude },
              { latitude: selectedLocation.latitude, longitude: selectedLocation.longitude },
            ]}
            strokeColor="#FF6347"
            strokeWidth={4}
          />
        )}
      </MapView>

      {directions && selectedLocation && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Dirección seleccionada: {selectedLocation.title}</Text>
          <Text style={styles.infoText}>
            Tiempo estimado de llegada: {directions.duration?.text || 'No disponible'}
          </Text>
          <Text style={styles.infoText}>
            Distancia total: {directions.distance?.text || 'No disponible'}
          </Text>
        </View>
      )}

      {selectedLocation && (
        <Button title="Actualizar Direcciones" onPress={() => fetchDirections(selectedLocation)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
});

export default MapScreen;
