import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';  // Usando FontAwesome

// Define the parameter list for your stack
type RootStackParamList = {
  Home: undefined;
  Agendamiento: undefined;
  HistorialClinico: undefined;
  BuscarPaciente: undefined;
  BuscarDoctor: undefined;  
  Encuentranos: undefined;
};


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* button appointmen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Agendamiento')}
      >
        <FontAwesome name="calendar" size={24} color="white" />
        <Text style={styles.buttonText}>Agendamiento</Text>
      </TouchableOpacity>

      {/* botton medical history */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HistorialClinico')}
      >
        <FontAwesome name="file" size={24} color="white" />
        <Text style={styles.buttonText}>Historial Clínico</Text>
      </TouchableOpacity>

      {/* button search patient */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BuscarPaciente')}
      >
        <FontAwesome name="search" size={24} color="white" />
        <Text style={styles.buttonText}>Buscar Paciente</Text>
      </TouchableOpacity>

      {/* button search doctor */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BuscarDoctor')}
      >
        <FontAwesome name="search" size={24} color="white" />
        <Text style={styles.buttonText}>Buscar Doctor</Text>
      </TouchableOpacity>

      {/* button map */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Encuentranos')}
      >
        <FontAwesome name="map-marker" size={24} color="white" />
        <Text style={styles.buttonText}>Encuéntranos Aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: '80%',
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, 
  },
});

export default HomeScreen;
