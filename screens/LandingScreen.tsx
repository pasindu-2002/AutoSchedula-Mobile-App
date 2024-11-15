import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function WelcomeScreen() {
  return (
    <LinearGradient
      colors={["#7C5B8E", "#0B0909"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.getStartedButton}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
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
  menuIcon: {
    position: "absolute",
    right: 0,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
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
    alignContent:"center",

    flexDirection: "row",
    justifyContent: 'center',
    width: "100%",
    marginTop: 20,
  },
  getStartedButton: {
    backgroundColor: "#fff",
    height: 50, // Set a fixed height
    width: 150, // Set a fixed width
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: 50, // Same height as Get Started
    width: 150, // Same width as Get Started
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
