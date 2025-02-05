import React, { useState } from "react";
import { Image } from "react-native";

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import Swiper from "react-native-swiper";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import styles from "../styles/registerStyles"; // Importa tus estilos

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

  const BASE_URL = "http://192.168.100.47:8000";

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
        ...(role === "doctor" ? { specialty } : {}),
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
        <Swiper loop={false} showsPagination={true} dotColor="#ccc" activeDotColor="#4CAF50">
          {/* Página 1: personal datas */}
          
          <View style={styles.slide}>
          <View style={styles.header}>
          <Image source={require("../../assets/logo1.png")} style={styles.logo} />
        <View style={styles.headerTextContainer}>
        </View>
      </View>
            <Text style={styles.medSyncTitle}>MedSync</Text>
            <Text style={styles.createAccountTitle}>Create Account</Text>

            <View style={styles.inputContainer}>
              <FontAwesome name="user" size={20} color="#4CAF50" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#a0a0a0"
              />
            </View>

            <View style={styles.inputContainer}>
              <FontAwesome name="user" size={20} color="#4CAF50" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
                placeholderTextColor="#a0a0a0"
              />
            </View>

            <View style={styles.inputContainer}>
              <FontAwesome name="envelope" size={20} color="#4CAF50" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#a0a0a0"
              />
            </View>
          </View>

          {/* Página 2: Security */}
          <View style={styles.slide}>
          <View style={styles.header}>
          <Image source={require("../../assets/logo1.png")} style={styles.logo} />
        <View style={styles.headerTextContainer}>
        </View>
      </View>
            <Text style={styles.createAccountTitle}>Security Information</Text>

            <View style={styles.inputContainer}>
              <FontAwesome name="lock" size={20} color="#4CAF50" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#a0a0a0"
              />
            </View>
          </View>

          {/* Páge 3: personality */}
          <View style={styles.slide}>
          <View style={styles.header}>
          <Image source={require("../../assets/logo1.png")} style={styles.logo} />
        <View style={styles.headerTextContainer}>
        </View>
      </View>
            <Text style={styles.createAccountTitle}>Personal Information</Text>

            <Text style={styles.label}>Role</Text>
            <View style={styles.pickerContainer}>
              <Picker selectedValue={role} onValueChange={setRole} style={styles.picker}>
                <Picker.Item label="Patient" value="patient" />
                <Picker.Item label="Doctor" value="doctor" />
              </Picker>
            </View>

            <View style={styles.inputContainer}>
              <FontAwesome name="calendar" size={20} color="#4CAF50" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
                placeholderTextColor="#a0a0a0"
              />
            </View>

            <Text style={styles.label}>Gender</Text>
            <View style={styles.pickerContainer}>
              <Picker selectedValue={gender} onValueChange={setGender} style={styles.picker}>
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </View>
          </View>

          {/* Páge 4: Contact */}
          <View style={styles.slide}>
          <View style={styles.header}>
          <Image source={require("../../assets/logo1.png")} style={styles.logo} />
        <View style={styles.headerTextContainer}>
        </View>
      </View>
            <Text style={styles.createAccountTitle}>Contact Information</Text>

            <View style={styles.inputContainer}>
              <FontAwesome name="phone" size={20} color="#4CAF50" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholderTextColor="#a0a0a0"
              />
            </View>

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
          </View>

          {/* Páge 5: Finaly */}
          <View style={styles.slide}>
          <View style={styles.header}>
          <Image source={require("../../assets/logo1.png")} style={styles.logo} />
        <View style={styles.headerTextContainer}>
        </View>
      </View>
            <Text style={styles.createAccountTitle}>Finish Registration</Text>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            {message && <Text style={styles.message}>{message}</Text>}
          </View>
        </Swiper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
