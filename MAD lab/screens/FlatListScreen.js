import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

export default function FlatListScreen() {
  const data = Array.from({ length: 15 }, (_, i) => ({
    id: i.toString(),
    name: `FlatList Item ${i + 1}`,
  }));

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: {
    backgroundColor: "#d1f0d1",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  text: { fontSize: 18, fontWeight: "bold" },
});
