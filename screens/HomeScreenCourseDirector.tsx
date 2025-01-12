import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  TextInput,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreenCourseDirector() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [newEntry, setNewEntry] = useState({
    day: "",
    batch: "",
    subject: "",
  });
  const [updatedTimetable, setUpdatedTimetable] = useState([
    { day: "", batch: "", subject: "" },
  ]);

  const [username, setUsername] = useState("");
  const [batch, setBatch] = useState("");
  const [loading, setLoading] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const toggleAddModal = () => setAddModalVisible(!addModalVisible);

  const handleAddEntry = () => {
    if (newEntry.day && newEntry.time && newEntry.subject) {
      setUpdatedTimetable([...updatedTimetable, newEntry]);
      setNewEntry({ day: "", time: "", subject: "", description: "" });
      toggleAddModal();
    } else {
      alert("Please fill all required fields.");
    }
  };

  // Fetch Lecturer data from AsyncStorage
  useEffect(() => {
    const fetchLecturerData = async () => {
      try {
        const storedLecturerData = await AsyncStorage.getItem("lecturerData");
        if (storedLecturerData) {
          const LecturerData = JSON.parse(storedLecturerData);
          setBatch(LecturerData.emp_no);
          setUsername(LecturerData.full_name);
        }
      } catch (error) {
        console.error("Failed to fetch Lecturer data from AsyncStorage", error);
      }
    };

    fetchLecturerData();
  }, []);

  useEffect(() => {
    const fetchTimetable = async () => {
      if (!batch) return; // Avoid fetching if batch is not set
      setLoading(true);
      try {
        const response = await fetch(
          `https://app.pasinduu.me/readTimetables.php?emp_no=${batch}`
        );
        const data = await response.json();

        if (response.ok) {
          if (data.data && data.data.length > 0) {
            const formattedTimetable = data.data.map((entry) => {
              const date = new Date(entry.date);
              const day = date.toLocaleDateString("en-GB");
              return {
                day,
                batch: entry.batch_id,
                subject: entry.module_id,
              };
            });
            setUpdatedTimetable(formattedTimetable);
          } else {
            // No timetable entries found
            setUpdatedTimetable([]);
            Alert.alert(
              "No Entries",
              "No timetable entries found for the specified batch."
            );
          }
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching timetable:", error);
        Alert.alert("Error", "Unable to fetch timetable. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTimetable();
  }, [batch]);

  const handleLogout = async () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem("lecturerData");
              navigation.navigate("Login");
            } catch (error) {
              console.error(
                "Failed to clear Lecturer data from AsyncStorage",
                error
              );
              Alert.alert(
                "Error",
                "Something went wrong. Please try again later."
              );
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#7C5B8E", "#0B0909"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.appName}>AutoSchedula</Text>
          <TouchableOpacity onPress={toggleMenu}>
            <MaterialIcons
              name="menu"
              size={30}
              color="#fff"
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileCard}>
          <Text style={styles.username}>Hi, {username}</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <MaterialIcons name="logout" size={20} color="#000" />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Timetable Section */}
        <View style={styles.timetableSection}>
          <Text style={styles.timetableTitle}>Timetable</Text>
          <ScrollView>
            {updatedTimetable.map((entry, index) => (
              <View key={index} style={styles.timetableEntry}>
                <Text style={styles.timetableDay}>{entry.day}</Text>
                <Text style={styles.timetableTime}>{entry.batch}</Text>
                <Text style={styles.timetableSubject}>{entry.subject}</Text>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.addButton} onPress={toggleAddModal}>
            <MaterialIcons name="add" size={20} color="#fff" />
            <Text style={styles.addButtonText}>ScheduleTimeTable</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton} onPress={toggleAddModal}>
            <MaterialIcons name="add" size={20} color="#fff" />
            <Text style={styles.addButtonText}>Update Time Table</Text>
          </TouchableOpacity>
        </View>

        {/* Add Entry Modal */}
        <Modal
          transparent={true}
          animationType="slide"
          visible={addModalVisible}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.addModalContainer}>
              <Text style={styles.modalTitle}>Add Timetable Entry</Text>
              <TextInput
                style={styles.input}
                placeholder="Day"
                placeholderTextColor="#aaa"
                value={newEntry.day}
                onChangeText={(text) => setNewEntry({ ...newEntry, day: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Time"
                placeholderTextColor="#aaa"
                value={newEntry.batch}
                onChangeText={(text) =>
                  setNewEntry({ ...newEntry, batch: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Subject"
                placeholderTextColor="#aaa"
                value={newEntry.subject}
                onChangeText={(text) =>
                  setNewEntry({ ...newEntry, subject: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Description (Optional)"
                placeholderTextColor="#aaa"
                value={newEntry.subject}
                onChangeText={(text) =>
                  setNewEntry({ ...newEntry, subject: text })
                }
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleAddEntry}
                >
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={toggleAddModal}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 20,
  },
  appName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  menuIcon: {
    alignSelf: "flex-end",
  },
  profileCard: {
    backgroundColor: "#944ea6",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  logoutText: {
    marginLeft: 5,
    color: "#000",
    fontWeight: "bold",
  },
  timetableSection: {
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
  },
  timetableTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  timetableEntry: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  timetableDay: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  timetableTime: {
    fontSize: 16,
    color: "#fff",
  },
  timetableSubject: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#fff",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#944ea6",
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
  },
  addButtonText: {
    marginLeft: 10,
    color: "#fff",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  addModalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#7C5B8E",
    padding: 15,
    borderRadius: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 15,
    borderRadius: 10,
  },
  cancelButtonText: {
    fontWeight: "bold",
  },
});
