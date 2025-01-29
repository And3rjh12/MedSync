import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen: React.FC = () => {
  
  const locations = [
    {
      id: 1,
      title: 'Sucursal Centro',
      description: 'Ubicada en el centro de la ciudad.',
      latitude: -0.220164, 
      longitude: -78.512326, 
    },
    {
      id: 2,
      title: 'Sucursal Norte',
      description: 'Ubicada en el norte de la ciudad.',
      latitude: -0.175664, 
      longitude: -78.480421, 
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -0.220164, 
          longitude: -78.512326, 
          latitudeDelta: 0.1, 
          longitudeDelta: 0.1, 
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.title}
            description={location.description}
          />
        ))}
      </MapView>
      <Text style={styles.infoText}>
        Selecciona una sucursal en el mapa para más información.
      </Text>
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
  infoText: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    fontSize: 16,
    color: '#333',
  },
});

export default MapScreen;
