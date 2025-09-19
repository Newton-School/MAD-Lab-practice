import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function FlatListScreen() {
  const data = Array.from({ length: 50 }, (_, i) => ({
    id: i.toString(),
    title: `Item ${i + 1}`,
  }));

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlatList Screen</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
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
