import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import axios from "axios"; 
import styles from "./styles/doctorSearchStyles"; // import styles

const DoctorSearchScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [doctorData, setDoctorData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleSearch = async () => {
    const encodedName = encodeURIComponent(name.trim());

    if (!encodedName) {
      setError("Por favor, ingrese un nombre.");
      setDoctorData(null);
      return;
    }

    try {
      console.log(`Haciendo solicitud a: http://192.168.1.13:8000/search_doctor/${encodedName}`);
      const response = await axios.get(`192.168.1.13:8000/search_doctor/${encodedName}`);
      console.log(response);

      if (response.data.doctors && response.data.doctors.length > 0) {
        setDoctorData(response.data.doctors[0]); 
        setError("");
      } else {
        setError("No se encontró ningún doctor con ese nombre.");
        setDoctorData(null);
      }
    } catch (err) {
      setError("Hubo un error al buscar el doctor.");
      setDoctorData(null);
    }
  };

  const handleDelete = async () => {
    if (!doctorData) return;
    
    try {
      const response = await axios.delete(`http://192.168.1.13:8000/delete_doctor/${name}`);
      if (response.status === 200) {
        setDoctorData(null); 
        setError("Doctor eliminado correctamente.");
      }
    } catch (err) {
      setError("Hubo un error al eliminar el doctor.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Doctor</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Ingrese el nombre del doctor"
        placeholderTextColor="#777"
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {error && <Text style={styles.error}>{error}</Text>}

      {doctorData && (
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorText}>
            <Text style={styles.bold}>Nombre:</Text> {doctorData.name} {doctorData.last_name}
          </Text>
          <Text style={styles.doctorText}>
            <Text style={styles.bold}>Correo:</Text> {doctorData.email}
          </Text>
          <Text style={styles.doctorText}>
            <Text style={styles.bold}>Especialidad:</Text> {doctorData.specialty}
          </Text>
          <Text style={styles.doctorText}>
            <Text style={styles.bold}>Teléfono:</Text> {doctorData.phone}
          </Text>
          
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.deleteButtonText}>Eliminar Doctor</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DoctorSearchScreen;
