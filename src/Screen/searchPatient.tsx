import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import axios from "axios"; 
import styles from "./styles/patientSearchStyles"; // import styles

const PatientSearchScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [patientData, setPatientData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleSearch = async () => {
    const encodedName = encodeURIComponent(name.trim());

    if (!encodedName) {
      setError("Por favor, ingrese un nombre.");
      setPatientData(null);
      return;
    }

    try {
      console.log(`Haciendo solicitud a: http://192.168.100.47:8000/search_patient/${encodedName}`);
      const response = await axios.get(`http://192.168.100.47:8000/search_patient/${encodedName}`);
      console.log(response);

      if (response.data.patients && response.data.patients.length > 0) {
        setPatientData(response.data.patients[0]); 
        setError("");
      } else {
        setError("No se encontró ningún paciente con ese nombre.");
        setPatientData(null);
      }
    } catch (err) {
      setError("Hubo un error al buscar el paciente.");
      setPatientData(null);
    }
  };

  const handleDelete = async () => {
    if (!patientData) return;
    
    try {
      const response = await axios.delete(`http://192.168.100.47:8000/delete_patient/${name}`);
      if (response.status === 200) {
        setPatientData(null);
        setError("Paciente eliminado correctamente.");
      }
    } catch (err) {
      setError("Hubo un error al eliminar el paciente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Paciente</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Ingrese el nombre del paciente"
        placeholderTextColor="#777"
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {error && <Text style={styles.error}>{error}</Text>}

      {patientData && (
        <View style={styles.patientDetails}>
          <Text style={styles.patientText}>
            <Text style={styles.bold}>Nombre:</Text> {patientData.name} {patientData.last_name}
          </Text>
          <Text style={styles.patientText}>
            <Text style={styles.bold}>Correo:</Text> {patientData.email}
          </Text>
          <Text style={styles.patientText}>
            <Text style={styles.bold}>Edad:</Text> {patientData.age}
          </Text>
          <Text style={styles.patientText}>
            <Text style={styles.bold}>Teléfono:</Text> {patientData.phone}
          </Text>
          <Text style={styles.patientText}>
            <Text style={styles.bold}>Especialidad:</Text> {patientData.specialty}
          </Text>
          
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.deleteButtonText}>Eliminar Paciente</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PatientSearchScreen;
