import React, { useState, useEffect } from "react";
import { 
  View, TextInput, Text, TouchableOpacity, ActivityIndicator, StyleSheet 
} from "react-native";
import axios from "axios";
import DateTimePicker from '@react-native-community/datetimepicker'; // For the calendar and clock

interface Patient {
  email: string;
  name: string;
  last_name: string;
  age: number;
}

export default function AppointmentScreen() {
  const [patientData, setPatientData] = useState<Patient | null>(null); // Patient data
  const [doctorId, setDoctorId] = useState<string>(""); // Doctor ID
  const [date, setDate] = useState<Date>(new Date()); // Appointment date
  const [time, setTime] = useState<Date>(new Date()); // Appointment time
  const [specialty, setSpecialty] = useState<string>(""); // Doctor's specialty
  const [reason, setReason] = useState<string>("General consultation"); // Reason for the appointment
  const [cost, setCost] = useState<string>("20.00"); // Appointment cost
  const [message, setMessage] = useState<string>(""); // Response messages
  const [loading, setLoading] = useState<boolean>(false); // Loading indicator

  const [doctors, setDoctors] = useState<any[]>([]); // List of doctors

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  // Load patient data (here you can simulate that the patient is already logged in)
  useEffect(() => {
    // Simulation of patient data (you should get it from some API or context)
    setPatientData({
      name: "Juan",
      last_name: "Pérez",
      email: "juan.perez@mail.com",
      age: 30
    });
  }, []);

  // Load doctors
  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`http://192.168.100.47:8000/doctors?specialty=${specialty}`);
      setDoctors(response.data.doctors);
    } catch (error: any) {
      setMessage("Error getting doctors: " + (error.response?.data?.message || error.message));
    }
  };

  // Execute when the specialty is selected
  useEffect(() => {
    if (specialty) {
      fetchDoctors(); 
    }
  }, [specialty]);

  const handleAppointmentSubmit = async () => {
    if (!patientData || !doctorId || !date || !time || !specialty) {
      setMessage("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://192.168.100.47:8000/appointments", {
        patient_email: patientData.email, // Send the patient's email
        doctor_id: doctorId,
        date: date.toISOString().split("T")[0], // Date in YYYY-MM-DD format
        time: time.toISOString().split("T")[1].substring(0, 5), // Time in HH:MM format
        reason, 
        cost,    
        specialty,  
      });
      setMessage("Appointment created successfully!");
    } catch (error: any) {
      setMessage("Error creating appointment: " + (error.response?.data?.message || error.message));
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {/* Display patient data */}
      {patientData && (
        <View style={styles.patientInfo}>
          <TextInput style={styles.input} value={patientData.name} editable={false} placeholder="First Name" />
          <TextInput style={styles.input} value={patientData.last_name} editable={false} placeholder="Last Name" />
          <TextInput style={styles.input} value={patientData.age.toString()} editable={false} placeholder="Age" />
          <TextInput style={styles.input} value={patientData.email} editable={false} placeholder="Email" />
        </View>
      )}

      {/* Doctor Selector */}
      <Text style={styles.label}>Select Doctor</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Doctor ID" 
        value={doctorId} 
        onChangeText={setDoctorId} 
      />

      {/* Date Selection */}
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
        <Text style={styles.label}>Select Date: {date.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            setDate(selectedDate || date);
          }}
        />
      )}

      {/* Time Selection */}
      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.timePickerButton}>
        <Text style={styles.label}>Select Time: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            setTime(selectedTime || time);
          }}
        />
      )}

      {/* Other fields */}
      <TextInput style={styles.input} placeholder="Appointment Reason" value={reason} onChangeText={setReason} />
      <TextInput style={styles.input} placeholder="Appointment Cost" value={cost} onChangeText={setCost} keyboardType="numeric" />

      <TouchableOpacity style={styles.button} onPress={handleAppointmentSubmit} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Book Appointment</Text>}
      </TouchableOpacity>

      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 15,
  },
  patientInfo: {
    marginTop: 20,
  },
  datePickerButton: {
    marginVertical: 10,
  },
  timePickerButton: {
    marginVertical: 10,
  },
});
