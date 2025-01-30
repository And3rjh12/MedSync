import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";  
import styles from "./styles/homeStyles"; //import styles

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
      {/* Button m appointment */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Agendamiento")}>
        <FontAwesome name="calendar" size={24} color="white" />
        <Text style={styles.buttonText}>Agendamiento</Text>
      </TouchableOpacity>

      {/* Button hystorial medical */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HistorialClinico")}>
        <FontAwesome name="file" size={24} color="white" />
        <Text style={styles.buttonText}>Historial Clínico</Text>
      </TouchableOpacity>

      {/* Button search patient */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BuscarPaciente")}>
        <FontAwesome name="search" size={24} color="white" />
        <Text style={styles.buttonText}>Buscar Paciente</Text>
      </TouchableOpacity>

      {/* Button m search doctor */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BuscarDoctor")}>
        <FontAwesome name="search" size={24} color="white" />
        <Text style={styles.buttonText}>Buscar Doctor</Text>
      </TouchableOpacity>

      {/* Button map */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Encuentranos")}>
        <FontAwesome name="map-marker" size={24} color="white" />
        <Text style={styles.buttonText}>Encuéntranos Aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
