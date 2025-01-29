import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ActivityIndicator, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons'; // Icons

interface LoginResponse {
  token: string;
}

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post<LoginResponse>('http://192.168.100.47:8000/login', {
        email: email,
        password: password,
      });
      setToken(response.data.token);
      setError('');
      navigation.navigate('Home'); //main screen 
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.formContainer}>
        {/*  MedSync */}
        <Text style={styles.title}>MedSync</Text>

        {/* Icon login */}
        <View style={styles.iconContainer}>
          <FontAwesome name="stethoscope" size={50} color="#4CAF50" />
        </View>

        {/*  */}
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
        
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="#4CAF50" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Botton  login */}
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}

        {/* error or success message */}
        {error && <Text style={styles.error}>{error}</Text>}
        {token && <Text style={styles.success}>Login Successful! Token: {token}</Text>}

        {/* Register */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Don't have an account? Create one</Text>
        </TouchableOpacity>

        {/* Iconos de redes sociales */}
        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.socialIconButton}>
            <FontAwesome name="google" size={40} color="#db4437" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', // Fondo suave y claro
    justifyContent: 'center',
    padding: 16,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '900',
    color: '#4CAF50',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  iconContainer: {
    marginBottom: 20,
    backgroundColor: '#f4f8f2',
    borderRadius: 50,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: '#4CAF50',
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  inputIcon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 8,
  },
  success: {
    color: 'green',
    textAlign: 'center',
    marginBottom: 8,
  },
  registerText: {
    color: '#4CAF50',
    textAlign: 'center',
    marginTop: 16,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 16,
  },
  socialIconButton: {
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 50,
    backgroundColor: '#f4f8f2',
    elevation: 5,
  },
});
