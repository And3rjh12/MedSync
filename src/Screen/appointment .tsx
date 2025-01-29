import React, { useState } from "react";
import { 
  View, TextInput, Text, TouchableOpacity, ActivityIndicator 
} from "react-native";
import axios from "axios";
import styles from "./styles/appointmentStyles"; // Importando los estilos

export default function AppointmentScreen() {
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAppointmentSubmit = async () => {
    if (!patientId || !doctorId || !date || !time) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://192.168.100.47:8000/appointments", {
        patient_id: patientId,
        doctor_id: doctorId,
        date,
        time,
      });
      setMessage("¡Cita creada exitosamente!");
    } catch (error: any) {
      setMessage("Error al crear la cita: " + (error.response?.data?.message || error.message));
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="ID del Paciente" value={patientId} onChangeText={setPatientId} />
      <TextInput style={styles.input} placeholder="ID del Doctor" value={doctorId} onChangeText={setDoctorId} />
      <TextInput style={styles.input} placeholder="Fecha (YYYY-MM-DD)" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Hora (HH:MM AM/PM)" value={time} onChangeText={setTime} />

      <TouchableOpacity style={styles.button} onPress={handleAppointmentSubmit} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Reservar Cita</Text>}
      </TouchableOpacity>

      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
}
