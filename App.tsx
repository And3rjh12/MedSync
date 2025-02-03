import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/Screen/LoginScreen";
import RegisterScreen from "./src/Screen/RegisterScreen";
import HomeScreen from "./src/Screen/HomeScreen";
import MapScreen from "./src/Screen/MapScreen";
import AppointmentScreen from "./src/Screen/appointmentScreen";
import PatientSearchScreen from "./src/Screen/searchPatient";
import DoctorSearchScreen from "./src/Screen/searchDoctor";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/*login screen*/}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} 
        />
        {/* register Screen */}
       { <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "Registro de Usuario" }} 
        />}
        {/* main screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Menú Principal", headerBackTitle: "Volver" }}
        />

        {/* appointment Screen */}
        <Stack.Screen
          name="Agendamiento"
          component={AppointmentScreen}
          options={{ title: "Agendamiento", headerBackTitle: "Volver" }}
        />

        {/* search patient */}
        <Stack.Screen
          name="BuscarPaciente"
          component={PatientSearchScreen}
          options={{ title: "buscar", headerBackTitle: "Volver" }}
        />
        {/* search doctor */}
        <Stack.Screen
          name="BuscarDoctor"
          component={DoctorSearchScreen}
          options={{ title: "Buscardoctor", headerBackTitle: "Volver" }}
        />


        {/* Map Screen */}
       { <Stack.Screen
          name="Encuentranos"
          component={MapScreen}
          options={{ title: "Mapa de Sucursales" }}
        />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
