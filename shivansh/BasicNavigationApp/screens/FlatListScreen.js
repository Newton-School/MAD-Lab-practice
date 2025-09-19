import React, { useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const DATA = Array.from({ length: 30 }).map((_, i) => ({ id: String(i + 1), title: `Item ${i + 1}` }));

export default function FlatListScreen() {
  const renderItem = useCallback(({ item }) => (
    <View style={styles.row}>
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity style={styles.rowButton} onPress={() => {}}>
        <Text style={styles.rowButtonText}>View</Text>
      </TouchableOpacity>
    </View>
  ), []);

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { paddingVertical: 8 },
  row: { backgroundColor: '#111827', marginHorizontal: 16, padding: 16, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { color: '#e5e7eb', fontSize: 16, fontWeight: '600' },
  rowButton: { backgroundColor: '#2563eb', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
  rowButtonText: { color: '#fff', fontWeight: '600' },
  separator: { height: 10 },
});


