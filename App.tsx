import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/LandingScreen';

export default function App() {
  return (
    <View style={styles.container}>
         <WelcomeScreen/>
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
