import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RoutePropScreen({ navigation, route }) {
  const from = route?.params?.from ?? 'Unknown';
  const timestamp = route?.params?.timestamp ?? null;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Route Params</Text>
        <Text style={styles.label}>from:</Text>
        <Text style={styles.value}>{from}</Text>
        <Text style={styles.label}>timestamp:</Text>
        <Text style={styles.value}>{timestamp ? new Date(timestamp).toLocaleString() : 'N/A'}</Text>

        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.goBack()}>
          <Text style={styles.primaryButtonText}>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.push('RoutePropScreen', { from: 'Push again', timestamp: Date.now() })}
        >
          <Text style={styles.secondaryButtonText}>Push Again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dangerButton} onPress={() => navigation.popToTop()}>
          <Text style={styles.dangerButtonText}>Pop To Top</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#0f172a' },
  card: { backgroundColor: '#111827', padding: 20, borderRadius: 16, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 12, shadowOffset: { width: 0, height: 8 }, elevation: 4 },
  title: { color: '#f9fafb', fontSize: 22, fontWeight: '700', marginBottom: 12 },
  label: { color: '#cbd5e1', marginTop: 8 },
  value: { color: '#e5e7eb', fontSize: 16 },
  primaryButton: { backgroundColor: '#2563eb', paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginTop: 16 },
  primaryButtonText: { color: '#fff', fontWeight: '600' },
  secondaryButton: { backgroundColor: '#1f2937', paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  secondaryButtonText: { color: '#e5e7eb', fontWeight: '600' },
  dangerButton: { backgroundColor: '#ef4444', paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  dangerButtonText: { color: '#fff', fontWeight: '600' },
});


