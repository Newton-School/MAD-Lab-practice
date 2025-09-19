import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ScrollViewScreen from './screens/ScrollViewScreen';
import FlatListScreen from './screens/FlatListScreen';
import RoutePropScreen from './screens/RoutePropScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScrollViewScreen" component={ScrollViewScreen} options={{ title: 'ScrollView' }} />
        <Stack.Screen name="FlatListScreen" component={FlatListScreen} options={{ title: 'FlatList' }} />
        <Stack.Screen name="RoutePropScreen" component={RoutePropScreen} options={{ title: 'Route Prop' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
