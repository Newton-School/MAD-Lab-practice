import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ScrollViewScreen from './screens/ScrollViewScreen';
import FlatListScreen from './screens/FlatListScreen';
import RoutePropScreen from './screens/RoutePropScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRouteName, setInitialRouteName] = useState('Login');
  const [isLoading, setIsLoading] = useState(true);

  const bootstrapAuthState = useCallback(async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        setInitialRouteName('Home');
      } else {
        setInitialRouteName('Login');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    bootstrapAuthState();
  }, [bootstrapAuthState]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <PaperProvider theme={MD3LightTheme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ScrollViewScreen" component={ScrollViewScreen} options={{ title: 'ScrollView' }} />
            <Stack.Screen name="FlatListScreen" component={FlatListScreen} options={{ title: 'FlatList' }} />
            <Stack.Screen name="RoutePropScreen" component={RoutePropScreen} options={{ title: 'Route Props' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
