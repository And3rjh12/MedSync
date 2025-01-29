import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios"; // Importar Axios

const DoctorSearchScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [doctorData, setDoctorData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  // Funtion search doctor
  const handleSearch = async () => {
    const encodedName = encodeURIComponent(name.trim());

    if (!encodedName) {
      setError("Por favor, ingrese un nombre.");
      setDoctorData(null);
      return;
    }

    try {
      // Realizamos la solicitud a la API de FastAPI
      console.log(
        `Haciendo solicitud a: http://192.168.100.47:8000/search_doctor/${encodedName}`
      );
      const response = await axios.get(
        `http://192.168.100.47:8000/search_doctor/${encodedName}`
      );
      console.log(response);

      if (response.data.doctors && response.data.doctors.length > 0) {
        setDoctorData(response.data.doctors[0]); // first find doctor
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

  // Funtion delete doctor
  const handleDelete = async () => {
    if (!doctorData) return;
    
    try {
      const response = await axios.delete(
        `http://192.168.100.47:8000/delete_doctor/${name}`
      );
      if (response.status === 200) {
        setDoctorData(null); // Limpiar la data del doctor
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5", // Fondo suave
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "85%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginTop: 10,
    fontSize: 16,
  },
  doctorDetails: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "90%",
    elevation: 3, // Sombra suave
  },
  doctorText: {
    fontSize: 16,
    marginBottom: 8,
    color: "#555",
  },
  bold: {
    fontWeight: "bold",
    color: "#333",
  },
  deleteButton: {
    backgroundColor: "#F44336", // Rojo para eliminar
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DoctorSearchScreen;
