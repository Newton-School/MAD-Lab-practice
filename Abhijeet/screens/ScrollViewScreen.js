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
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#121212", 
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 25,
    color: "#fff",
    letterSpacing: 1,
  },
  item: {
    backgroundColor: "#1f1f1f", 
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    borderColor: "#333",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, 
  },
  itemText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "500",
  },
});
