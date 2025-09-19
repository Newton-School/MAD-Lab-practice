import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function ScrollViewScreen() {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ScrollView Screen</Text>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  item: {
    backgroundColor: "#333",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#555",
    borderWidth: 1,
  },
  itemText: {
    fontSize: 16,
    color: "#fff",
  },
});
