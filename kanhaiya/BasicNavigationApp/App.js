import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


// Import screens
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import FlatListScreen from "./FlatListScreen"
import ScrollViewScreen from "./ScrollViewScreen"
import RoutePropScreen from "./RoutePropScreen"
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="ScrollView"
          component={ScrollViewScreen}
          options={{
            title: 'ScrollView Demo',
          }}
        />
        <Stack.Screen
          name="FlatList"
          component={FlatListScreen}
          options={{
            title: 'FlatList Demo',
          }}
        />
        <Stack.Screen
          name="RouteProp"
          component={RoutePropScreen}
          options={{
            title: 'RouteProp Demo',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
