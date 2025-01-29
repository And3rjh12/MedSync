import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";  
import styles from "./styles/homeStyles"; // Importando los estilos

// Definir la lista de parámetros del stack
type RootStackParamList = {
  Home: undefined;
  Agendamiento: undefined;
  HistorialClinico: undefined;
  BuscarPaciente: undefined;
  BuscarDoctor: undefined;
  Encuentranos: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Botón para agendamiento */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Agendamiento")}>
        <FontAwesome name="calendar" size={24} color="white" />
        <Text style={styles.buttonText}>Agendamiento</Text>
      </TouchableOpacity>

      {/* Botón historial clínico */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HistorialClinico")}>
        <FontAwesome name="file" size={24} color="white" />
        <Text style={styles.buttonText}>Historial Clínico</Text>
      </TouchableOpacity>

      {/* Botón buscar paciente */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BuscarPaciente")}>
        <FontAwesome name="search" size={24} color="white" />
        <Text style={styles.buttonText}>Buscar Paciente</Text>
      </TouchableOpacity>

      {/* Botón buscar doctor */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BuscarDoctor")}>
        <FontAwesome name="search" size={24} color="white" />
        <Text style={styles.buttonText}>Buscar Doctor</Text>
      </TouchableOpacity>

      {/* Botón mapa */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Encuentranos")}>
        <FontAwesome name="map-marker" size={24} color="white" />
        <Text style={styles.buttonText}>Encuéntranos Aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
