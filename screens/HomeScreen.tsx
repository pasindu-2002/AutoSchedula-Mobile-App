import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const activities = [
    { title: "Upcoming Class", subtitle: "Math - Algebra", time: "10:00 AM - 11:00 AM" },
    { title: "Next Lecture", subtitle: "Physics - Mechanics", time: "12:30 PM - 1:30 PM" },
    { title: "Assignment Due", subtitle: "History - WW2 Report", time: "Deadline: 6:00 PM" },
  ];

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
            <MaterialIcons name="menu" size={30} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.profilePic}
          />
          <Text style={styles.username}>Hi, Eranga</Text>
          <TouchableOpacity style={styles.logoutButton}>
            <MaterialIcons name="logout" size={20} color="#000" />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Activity Section */}
        <View style={styles.activitySection}>
          <Text style={styles.activityTitle}>Your Activity</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {activities.map((activity, index) => (
              <View key={index} style={styles.activityCard}>
                <Text style={styles.cardTitle}>{activity.title}</Text>
                <Text style={styles.cardSubtitle}>{activity.subtitle}</Text>
                <Text style={styles.cardTime}>{activity.time}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.activitySection}>
          <Text style={styles.activityTitle}>Your Activity</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {activities.map((activity, index) => (
              <View key={index} style={styles.activityCard}>
                <Text style={styles.cardTitle}>{activity.title}</Text>
                <Text style={styles.cardSubtitle}>{activity.subtitle}</Text>
                <Text style={styles.cardTime}>{activity.time}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

 <View style={styles.activitySection}>
          <Text style={styles.activityTitle}>Your Activity</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {activities.map((activity, index) => (
              <View key={index} style={styles.activityCard}>
                <Text style={styles.cardTitle}>{activity.title}</Text>
                <Text style={styles.cardSubtitle}>{activity.subtitle}</Text>
                <Text style={styles.cardTime}>{activity.time}</Text>
              </View>
            ))}
          </ScrollView>
        </View>


        {/* Menu Modal */}
        {menuVisible && (
          <Modal transparent={true} animationType="fade" visible={menuVisible}>
            <TouchableOpacity style={styles.modalOverlay} onPress={toggleMenu}>
              <TouchableWithoutFeedback>
                                <View style={[styles.menuContainer, { backgroundColor: "#7C5B8E" }]}>
                  <View style={styles.menuHeader}>
                    <Text style={styles.appName}>AutoSchedula</Text>
                    <TouchableOpacity onPress={toggleMenu}>
                      <MaterialIcons name="close" size={30} color="#fff" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.menuItems}>
                    <TouchableOpacity style={styles.menuItem}>
                      <MaterialIcons name="table-chart" size={20} color="#000" />
                      <Text style={styles.menuText}>View Time Table</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                      <MaterialIcons name="assignment" size={20} color="#000" />
                      <Text style={styles.menuText}>Event</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                      <MaterialIcons name="schedule" size={20} color="#000" />
                      <Text style={styles.menuText}>Schedules</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                      <MaterialIcons name="notifications" size={20} color="#000" />
                      <Text style={styles.menuText}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                      <MaterialIcons name="settings" size={20} color="#000" />
                      <Text style={styles.menuText}>Settings</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </Modal>
        )}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
  appName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    alignSelf: 'flex-end',
  },
  profileCard: {
    backgroundColor: '#944ea6',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  logoutText: {
    marginLeft: 5,
    color: '#000',
    fontWeight: 'bold',
  },
  activitySection: {
    marginTop: 20,
  },
  activityTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    fontWeight: '600',
  },
  activityCard: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
    width: 250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#4B0082',
    marginBottom: 5,
  },
  cardTime: {
    fontSize: 12,
    color: '#4B0082',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: '80%',
    borderRadius: 20,
    padding: 20,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuItems: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
