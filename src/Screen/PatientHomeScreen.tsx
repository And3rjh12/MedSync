import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";  
import styles from "../styles/patientScreen"; // import styles


type RootStackParamList = {
  PatientHome: undefined;
  Agendamiento: undefined;
  HistorialClinico: undefined;
  Encuentranos: undefined;
};

type PatientHomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "PatientHome">;

interface PatientHomeScreenProps {
  navigation: PatientHomeScreenNavigationProp;
}

const PatientHomeScreen: React.FC<PatientHomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* 
Scheduling button*/}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Agendamiento")}>
        <FontAwesome name="calendar" size={24} color="white" />
        <Text style={styles.buttonText}>Agendamiento</Text>
      </TouchableOpacity>

      {/* Clinical history button
*/}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HistorialClinico")}>
        <FontAwesome name="file" size={24} color="white" />
        <Text style={styles.buttonText}>Historial Clínico</Text>
      </TouchableOpacity>

      {/* Button map */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Encuentranos")}>
        <FontAwesome name="map-marker" size={24} color="white" />
        <Text style={styles.buttonText}>Encuéntranos Aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PatientHomeScreen;
