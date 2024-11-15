import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  return (
    <LinearGradient
    colors={["#7C5B8E", "#0B0909"]}
    locations={[0.01, 0.79]}
    start={{ x: 1, y: -0.2 }}  
    end={{ x: 0, y: 1 }}
    style={styles.container}
    >
      {/* App Bar */}
      <View style={styles.appBar}>
        <Text style={styles.title}>AutoSchedula</Text>
        <Ionicons name="book" size={24} color="#fff" />
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Login to your Account</Text>

        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/login-img.png")}
            style={styles.image}
          />
        </View>

        {/* Username Input */}
        <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Username"
            placeholderTextColor="#757478"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter Your Password"
            placeholderTextColor="#757478"
            secureTextEntry
          />
        </View>

        {/* Remember Me and Forgot Password */}
        <View style={styles.optionsContainer}>
          <Text style={styles.rememberText}>Remember me</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  subtitle: {
    fontSize: 23,
    color: "#fff",
    fontWeight: "800",
    marginBottom: 25,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    
    resizeMode: "contain",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  icon: {
    marginRight: 10,
    color:"#000000"
  },
  input: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  rememberText: {
    color: "#fff",
  },
  forgotPassword: {
    color: "#a8a8a8",
  },
  loginButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
  },
  loginText: {
    color: "#2E1A3E",
    fontSize: 18,
    fontWeight: '900',
  },
});
