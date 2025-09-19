import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RoutePropScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Received: {route.params?.info}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("RoutePropScreen", { info: "Pushed Again!" })
        }
      >
        <Text style={styles.buttonText}>Push Again</Text>
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
    backgroundColor: "#fff",
  },
  text: { fontSize: 20, marginBottom: 30, fontWeight: "bold", color: "#333" },
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
