import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "../styles/homeStyles";

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

// API OpenWeatherMap
const API_KEY = "acd74395733306be9f4925d84e429601"; // Apy_key
const CITY = "Quito";
const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&appid=${API_KEY}`;

interface WeatherData {
  dt_txt: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [forecast, setForecast] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        const dailyForecast = data.list.filter((_: any, index: number) => index % 8 === 0);
        setForecast(dailyForecast);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header con Logo */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo1.png")} style={styles.logo} />
      </View>

      {/* Botones en Grid */}
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate("Agendamiento")}>
          <Image source={require("../../assets/calendar.jpg")} style={styles.iconImage} />
          <Text style={styles.gridText}>Agendar citas médicas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate("BuscarDoctor")}>
          <Image source={require("../../assets/stethoscope.jpg")} style={styles.iconImage} />
          <Text style={styles.gridText}>Buscar Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate("BuscarPaciente")}>
          <Image source={require("../../assets/patients.png")} style={styles.iconImage} />
          <Text style={styles.gridText}>Buscar Pacientes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate("Encuentranos")}>
          <Image source={require("../../assets/map.png")} style={styles.iconImage} />
          <Text style={styles.gridText}>Encuentranos</Text>
        </TouchableOpacity>
      </View>

      {/* Climate */}
      <View style={styles.weatherContainer}>
        <Text style={styles.weatherTitle}>Pronóstico del Clima </Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={forecast}
            keyExtractor={(item) => item.dt_txt}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.weatherList}
            renderItem={({ item }) => (
              <View style={styles.weatherCard}>
                <Text style={styles.weatherDate}>{new Date(item.dt_txt).toLocaleDateString()}</Text>
                <Image
                  source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }}
                  style={styles.weatherIcon}
                />
                <Text style={styles.weatherTemp}>{item.main.temp.toFixed(1)}°C</Text>
                <Text style={styles.weatherDesc}>{item.weather[0].description}</Text>
              </View>
            )}
          />
        )}
      </View>

      {/* Butonhat */}
      <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate("Chat")}>
        <Text style={styles.chatButtonText}>Chat en tiempo real</Text>
      </TouchableOpacity>

      {/* ChatBot */}
      <TouchableOpacity style={styles.botButton} onPress={() => navigation.navigate("ChatBot")}>
        <Image source={require("../../assets/bot.png")} style={styles.botImage} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
