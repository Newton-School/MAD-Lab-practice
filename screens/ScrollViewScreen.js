import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function ScrollViewScreen() {
  const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {items.map((item) => (
        <View key={item} style={styles.card}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { padding: 16, backgroundColor: '#f2f2f2', marginBottom: 12, borderRadius: 8 },
  text: { fontSize: 16 },
});


