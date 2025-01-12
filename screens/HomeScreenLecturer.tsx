import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreenLecturer() {

  const [menuVisible, setMenuVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [newEntry, setNewEntry] = useState({
    day: "",
    time: "",
    subject: "",
    description: "",
  });
  const [updatedTimetable, setUpdatedTimetable] = useState([
    { day: "Monday", time: "9:00 AM - 10:00 AM", subject: "Math" },
    { day: "Monday", time: "10:00 AM - 11:00 AM", subject: "Science" },
    { day: "Tuesday", time: "9:00 AM - 10:00 AM", subject: "History" },
    { day: "Monday", time: "9:00 AM - 10:00 AM", subject: "Math" },
    { day: "Monday", time: "10:00 AM - 11:00 AM", subject: "Science" },
    { day: "Tuesday", time: "9:00 AM - 10:00 AM", subject: "History" },
    { day: "Monday", time: "9:00 AM - 10:00 AM", subject: "Math" },
    { day: "Monday", time: "10:00 AM - 11:00 AM", subject: "Science" },
    { day: "Tuesday", time: "9:00 AM - 10:00 AM", subject: "History" },
    { day: "Monday", time: "9:00 AM - 10:00 AM", subject: "Math" },
    { day: "Monday", time: "10:00 AM - 11:00 AM", subject: "Science" },
    { day: "Tuesday", time: "9:00 AM - 10:00 AM", subject: "History" },
    { day: "Monday", time: "9:00 AM - 10:00 AM", subject: "Math" },
    { day: "Monday", time: "10:00 AM - 11:00 AM", subject: "Science" },
    { day: "Tuesday", time: "9:00 AM - 10:00 AM", subject: "History" },
  ]);

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
          <Text style={styles.username}>Hi, Eranga</Text>
          <TouchableOpacity style={styles.logoutButton}>
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
                <Text style={styles.timetableTime}>{entry.time}</Text>
                <Text style={styles.timetableSubject}>{entry.subject}</Text>
              </View>
            ))}
          </ScrollView>
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
                value={newEntry.time}
                onChangeText={(text) => setNewEntry({ ...newEntry, time: text })}
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
                value={newEntry.description}
                onChangeText={(text) =>
                  setNewEntry({ ...newEntry, description: text })
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
