import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");

  const handlePress = async () => {
    try {
      const studentData = await AsyncStorage.getItem('studentData');
      if (studentData) {
        // Navigate to HomeScreenStudent if studentData exists
        navigation.navigate('HomeScreenStudent', { studentData: JSON.parse(studentData) });
      } else {
        // Navigate to LoginScreen if studentData does not exist
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Failed to fetch student data from AsyncStorage', error);
      // Navigate to LoginScreen in case of an error
      navigation.navigate('Login');
    }
  };

  return (
    <LinearGradient
      colors={["#7C5B8E", "#0B0909"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      {/* App Bar */}
      <View style={styles.appBar}>
        <Text style={styles.title}>AutoSchedula</Text>
        <Ionicons name="book" size={24} color="#fff" />
      </View>

      <View style={styles.container}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/landing.png")}
            style={styles.image}

          />
        </View>

        {/* Text Content */}
        <Text style={styles.heading}>Learning Today,</Text>
        <Text style={styles.heading}>Leading Tomorrow.!</Text>
        <Text style={styles.description}>
          I wish you luck as you navigate this ever-changing world of knowledge
          and technology.
        </Text>

        {/* Buttons */}
        <View style={[styles.buttonContainer, { width: width * 0.8 }]}>
          <TouchableOpacity
            style={styles.getStartedButton}
            accessible={true}
            accessibilityLabel="Navigate to the Home screen"
           
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            accessible={true}
            accessibilityLabel="Navigate to the Login screen"
            onPress={handlePress}
          >
            <Text style={styles.loginText}>Login in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  appBar: {
    height: 100,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    width: 700,
    height: 400,
    resizeMode: "contain",
  },
  heading: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  getStartedButton: {
    backgroundColor: "#fff",
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  getStartedText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
