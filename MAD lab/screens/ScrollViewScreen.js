import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

export default function ScrollViewScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Array.from({ length: 20 }, (_, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.text}>apple {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: {
    backgroundColor: "#e0e0ff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  text: { fontSize: 18, fontWeight: "bold", color: "#333" },
});
