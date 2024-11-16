import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/LandingScreen';
import Home from './screens/HomeScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
         <HomeScreen />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E1A3E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
