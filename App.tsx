import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreenCourseDirector from './screens/HomeScreenCourseDirector';
import HomeScreenLecturer from './screens/HomeScreenLecturer';
import HomeScreenStudent from './screens/HomeScreenStudent';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreenCourseDirector" component={HomeScreenCourseDirector} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreenLecturer" component={HomeScreenLecturer} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreenStudent" component={HomeScreenStudent} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
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
