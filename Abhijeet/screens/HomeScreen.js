import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUsername = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      setUsername(storedUsername || "");
    };
    getUsername();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.replace("Login");
    } catch (error) {
      Alert.alert("Error", "Failed to logout");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ScrollView")}
      >
        <Text style={styles.buttonText}>Go to ScrollView</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FlatList")}
      >
        <Text style={styles.buttonText}>Go to FlatList</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("RouteProp", { message: "Hello from Home!" })
        }
      >
        <Text style={styles.buttonText}>Go to RouteProp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#1e1e1e", 
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
    color: "#fff",
    letterSpacing: 1,
  },
  button: {
    width: "100%",
    backgroundColor: "#ff6b6b", 
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6, 
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
