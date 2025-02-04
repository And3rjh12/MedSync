import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import styles from "./styles/homeStyles";

type RootStackParamList = {
  Home: undefined;
  Agendamiento: undefined;
  Profesionales: undefined;
  Pacientes: undefined;
  Encuentranos: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos por 10 segundos
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        /** 🔹 Skeleton Loader en Formato Grid 🔹 **/
        <ScrollView>
          <SkeletonPlaceholder borderRadius={8}>
            <SkeletonPlaceholder.Item flexDirection="row" flexWrap="wrap" justifyContent="space-between">
              {[...Array(4)].map((_, index) => (
                <SkeletonPlaceholder.Item key={index} style={styles.skeletonGridItem}>
                  
                  {/* Contenedor de avatar y texto */}
                  <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" marginTop={10}>
                    <SkeletonPlaceholder.Item width={40} height={40} borderRadius={20} />
                    <SkeletonPlaceholder.Item marginLeft={10}>
                      <SkeletonPlaceholder.Item width={100} height={15} />
                      <SkeletonPlaceholder.Item width={80} height={10} marginTop={5} />
                    </SkeletonPlaceholder.Item>
                  </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
              ))}
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        </ScrollView>
      ) : (
        /** 🔹 Contenido Real 🔹 **/
        <>
          <View style={styles.header}>
            <Image source={require("../../assets/logo1.png")} style={styles.logo} />
          </View>

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
        </>
      )}
    </View>
  );
};

export default HomeScreen;
