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
