import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const items = Array.from({ length: 20 }).map((_, i) => ({ id: i + 1, title: `Item ${i + 1}`, subtitle: `ye rhe items ${i + 1}` }));

export default function ScrollViewScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {items.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        </View>
      ))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 16 },
  card: { backgroundColor: '#111827', borderRadius: 12, padding: 16, marginBottom: 12, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } },
  cardTitle: { color: '#e5e7eb', fontSize: 18, fontWeight: '600', marginBottom: 4 },
  cardSubtitle: { color: '#9ca3af' },
});


