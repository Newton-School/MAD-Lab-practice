import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation, route }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      const storedName = await AsyncStorage.getItem("username");
      setUsername(storedName || route.params?.username || "Guest");
    };
    loadUser();
  }, []);

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username} 👋</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ScrollViewScreen")}
      >
        <Text style={styles.buttonText}>Go to ScrollView</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FlatListScreen")}
      >
        <Text style={styles.buttonText}>Go to FlatList</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("RoutePropScreen", { info: "Hello from Home!" })
        }
      >
        <Text style={styles.buttonText}>Go to RouteProp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "tomato" }]}
        onPress={logout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 30 },
  button: {
    backgroundColor: "#6200ee",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
