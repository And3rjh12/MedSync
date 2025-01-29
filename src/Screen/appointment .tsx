import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';

export default function AppointmentScreen() {
  const [patientId, setPatientId] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleAppointmentSubmit = async () => {
    try {
      const response = await axios.post('http://192.168.100.47:8000/appointments', {
        patient_id: patientId,
        doctor_id: doctorId,
        date,
        time,
      });
      setMessage('Appointment created successfully!');
    } catch (error:any) {
      setMessage('Error creating appointment: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Patient ID"
        value={patientId}
        onChangeText={setPatientId}
      />
      <TextInput
        style={styles.input}
        placeholder="Doctor ID"
        value={doctorId}
        onChangeText={setDoctorId}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Time (HH:MM AM/PM)"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Book Appointment" onPress={handleAppointmentSubmit} />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  message: {
    marginTop: 12,
    color: 'green',
  },
});
