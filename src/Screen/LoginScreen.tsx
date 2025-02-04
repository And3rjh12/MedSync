import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";  
import styles from "./styles/homeStyles"; 

type RootStackParamList = {
  Home: undefined;
  Agendamiento: undefined;
  Profesionales: undefined;
  Pacientes: undefined;
  Encuentranos: undefined;
  Chat: undefined;
  ChatBot: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with logo and text */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo1.png")} style={styles.logo} />
        <View style={styles.headerTextContainer}>
        </View>
      </View>

      {/* Button container in grid */}
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate("Agendamiento")}>
          <Image source={require("../../assets/calendar.jpg")} style={styles.iconImage} />
          <Text style={styles.gridText}>Agendar citas médicas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate("Profesionales")}>
          <Image source={require("../../assets/stethoscope.jpg")} style={styles.iconImage} />
          <Text style={styles.gridText}>Profesionales</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate("Pacientes")}>
          <Image source={require("../../assets/patients.png")} style={styles.iconImage} />
          <Text style={styles.gridText}>Pacientes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate("Encuentranos")}>
          <Image source={require("../../assets/map.png")} style={styles.iconImage} />
          <Text style={styles.gridText}>Encuentranos</Text>
        </TouchableOpacity>
      </View>
      {/* Chat button */}
      <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate("Chat")}>
        <Text style={styles.chatButtonText}>Chat en tiempo real</Text>
      </TouchableOpacity>
      {/* Bot Floating Button */}
      <TouchableOpacity style={styles.botButton} onPress={() => navigation.navigate("ChatBot")}>
        <Image source={require("../../assets/bot.png")} style={styles.botImage} />
      </TouchableOpacity>


    </View>
  );
};

export default HomeScreen;