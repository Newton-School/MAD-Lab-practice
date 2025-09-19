import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RoutePropScreen({ route, navigation }) {
  const { message } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RouteProp Screen</Text>
      {message && <Text style={styles.message}>Message: {message}</Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("RouteProp", { message: "Pushed message!" })
        }
      >
        <Text style={styles.buttonText}>Push Another</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonText}>Pop to Top</Text>
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
    backgroundColor: "#121212", // Dark, modern background
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 25,
    color: "#fff",
    letterSpacing: 1,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 25,
    color: "#fff",
  },
  button: {
    width: "100%",
    backgroundColor: "#ff6b6b", 
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, 
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
