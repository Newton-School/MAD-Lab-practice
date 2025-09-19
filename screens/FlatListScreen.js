import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function FlatListScreen() {
  const data = Array.from({ length: 50 }, (_, i) => ({ id: String(i + 1), title: `Row ${i + 1}` }));

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  row: { padding: 16, backgroundColor: '#e8f0fe', marginBottom: 12, borderRadius: 8 },
  text: { fontSize: 16 },
});


