import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screen/LoginScreen";
import HomePage from "./screen/HomePage";
import ScrollViewScreen from "./screen/ScrollViewScreen";
import { FlatList } from "react-native-gesture-handler";
import FlatListScreen from "./screen/FlatListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen
                    name="Scroll View Screen"
                    component={ScrollViewScreen}
                />
                <Stack.Screen
                    name="Flat View Screen"
                    component={FlatListScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
