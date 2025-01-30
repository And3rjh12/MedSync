import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import styles from "./styles/registerStyles"; // import styles

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("patient");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [message, setMessage] = useState("");

  const BASE_URL = "http://192.168.1.13:8000";

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        email,
        password,
        name,
        last_name: lastName,
        role,
        age: age ? parseInt(age) : null,
        gender,
        phone,
        specialty: role === "doctor" ? specialty : null,
      });
      setMessage(response.data.message || "User created successfully!");
    } catch (error: any) {
      
      setMessage(error.response?.data?.detail || `Error: ${error.message}`);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* MedSync Title */}
          <Text style={styles.medSyncTitle}>MedSync</Text>

          {/* Mostrar mensaje solo si es una cadena de texto */}
          {message && typeof message === "string" && (
            <Text style={styles.message}>{message}</Text>
          )}

          {/* Create Account Title */}
          <Text style={styles.createAccountTitle}>Create Account</Text>

          {/* Email */}
          <View style={styles.inputContainer}>
            <FontAwesome
              name="envelope"
              size={20}
              color="#4CAF50"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#a0a0a0"
            />
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <FontAwesome
              name="lock"
              size={20}
              color="#4CAF50"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#a0a0a0"
            />
          </View>

          {/* Name */}
          <View style={styles.inputContainer}>
            <FontAwesome
              name="user"
              size={20}
              color="#4CAF50"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
              placeholderTextColor="#a0a0a0"
            />
          </View>

          {/* Last Name */}
          <View style={styles.inputContainer}>
            <FontAwesome
              name="user"
              size={20}
              color="#4CAF50"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              placeholderTextColor="#a0a0a0"
            />
          </View>

          {/* Role */}
          <Text style={styles.label}>Role</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={role}
              onValueChange={(itemValue) => setRole(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Patient" value="patient" />
              <Picker.Item label="Doctor" value="doctor" />
            </Picker>
          </View>

          {/* Age */}
          <View style={styles.inputContainer}>
            <FontAwesome
              name="calendar"
              size={20}
              color="#4CAF50"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Age"
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
              placeholderTextColor="#a0a0a0"
            />
          </View>

          {/* Gender */}
          <Text style={styles.label}>Gender</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>

          {/* Phone */}
          <View style={styles.inputContainer}>
            <FontAwesome
              name="phone"
              size={20}
              color="#4CAF50"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              placeholderTextColor="#a0a0a0"
            />
          </View>

          {/* Specialty (only for doctors) */}
          {role === "doctor" && (
            <View style={styles.inputContainer}>
              <FontAwesome name="bed" size={20} color="#4CAF50" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Specialty"
                value={specialty}
                onChangeText={setSpecialty}
                placeholderTextColor="#a0a0a0"
              />
            </View>
          )}

          {/* Register Button */}
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
