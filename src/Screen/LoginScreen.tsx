import React, { useState } from "react";
import { 
  View, TextInput, Text, ActivityIndicator, TouchableOpacity, 
  KeyboardAvoidingView, Platform 
} from "react-native";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons"; // Icons
import styles from "./styles/loginStyles"; // import styles

interface LoginResponse {
  token: string;
}

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post<LoginResponse>(
        "http://192.168.1.13:8000/login", 
        { email, password }
      );
      setToken(response.data.token);
      setError("");
      navigation.navigate("Home"); // sacreen
    } catch (err) {
      setError("Email o contraseña inválidos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.formContainer}>
        {/*  MedSync */}
        <Text style={styles.title}>MedSync</Text>

        {/* Icon login */}
        <View style={styles.iconContainer}>
          <FontAwesome name="stethoscope" size={50} color="#4CAF50" />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="#4CAF50" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        
        {/* Password Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="#4CAF50" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Ingresar</Text>}
        </TouchableOpacity>

        {/* Error or Success Message */}
        {error && <Text style={styles.error}>{error}</Text>}
        {token && <Text style={styles.success}>¡Inicio de sesión exitoso!</Text>}

        {/* Register */}
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerText}>¿No tienes una cuenta? Regístrate</Text>
        </TouchableOpacity>

        {/* Social Login Icons */}
        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.socialIconButton}>
            <FontAwesome name="google" size={40} color="#db4437" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
