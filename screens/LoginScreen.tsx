import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Attempt Student Login
      const studentUrl = `https://app.pasinduu.me/student.php?stu_id=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(password)}`;
      const studentResponse = await fetch(studentUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const studentResult = await studentResponse.json();

      if (studentResponse.ok) {
        Alert.alert(
          "Login Successful",
          "You have successfully logged in as a student."
        );
        // Navigate to HomeScreenStudent
        navigation.navigate("HomeScreenStudent", {
          studentData: studentResult.data,
        });
        // Store student data in local storage
        await AsyncStorage.setItem(
          "studentData",
          JSON.stringify(studentResult.data)
        );
        return; // Exit function after successful student login
      }

      // If student login fails, attempt Lecturer Login
      const lecturerUrl = `https://app.pasinduu.me/lecturers.php?emp_no=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(password)}`;
      const lecturerResponse = await fetch(lecturerUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const couserDirectorUrl = `https://app.pasinduu.me/getCourseDirector.php?course_director=${encodeURIComponent(
        email
      )}`;
      const couserDirectorResponse = await fetch(couserDirectorUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const lecturerResult = await lecturerResponse.json();

      if (lecturerResponse.ok && couserDirectorResponse.ok) {
        Alert.alert(
          "Login Successful",
          "You have successfully logged in as a lecturer."
        );
        // Navigate to HomeScreenCourseDirector
        navigation.navigate("HomeScreenCourseDirector", {
          lecturerData: lecturerResult.data,
        });
        // Store lecturer data in local storage
        await AsyncStorage.setItem(
          "lecturerData",
          JSON.stringify(lecturerResult.data)
        );
        return; // Exit function after successful lecturer login
      } else if (lecturerResponse.ok) {
        Alert.alert(
          "Login Successful",
          "You have successfully logged in as a lecturer."
        );
        // Navigate to HomeScreenCourseDirector
        navigation.navigate("HomeScreenLecturer", {
          lecturerData: lecturerResult.data,
        });
        // Store lecturer data in local storage
        await AsyncStorage.setItem(
          "lecturerData",
          JSON.stringify(lecturerResult.data)
        );
        return; // Exit function after successful lecturer login
      }

      // If both logins fail, show an error message
      Alert.alert(
        "Login Failed",
        "Invalid email or password. Please try again."
      );
    } catch (error) {
      // Handle any unexpected errors
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };

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
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#757478"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed"
            size={20}
            color="#ccc"
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter Your Password"
            placeholderTextColor="#757478"
            value={password}
            onChangeText={setPassword}
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
        <TouchableOpacity
          style={styles.loginButton}
          accessible={true}
          accessibilityLabel="Navigate to the Login screen"
          onPress={handleLogin}
        >
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
    color: "#000000",
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
    fontWeight: "900",
  },
});
