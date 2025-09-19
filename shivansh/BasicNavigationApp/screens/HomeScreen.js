import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { clearCredentials } from '../utils/storage';

export default function HomeScreen({ navigation, route }) {
  const username = route?.params?.username ?? '';

  const logout = useCallback(async () => {
    await clearCredentials();
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.greetingTitle}>Welcome,</Text>
        <Text style={styles.greetingName}>{username || 'Guest'}</Text>
        <Text style={styles.greetingSubtitle}>You are now logged in.</Text>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('ScrollViewScreen')} activeOpacity={0.85}>
          <Text style={styles.secondaryText}>Open ScrollView Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('FlatListScreen')} activeOpacity={0.85}>
          <Text style={styles.secondaryText}>Open FlatList Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('RoutePropScreen', { from: 'Home', timestamp: Date.now() })}
          activeOpacity={0.85}
        >
          <Text style={styles.secondaryText}>Open Route Props Demo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={logout} activeOpacity={0.8}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#0f172a' },
  card: { backgroundColor: '#111827', padding: 24, borderRadius: 16, marginHorizontal: 4, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 12, shadowOffset: { width: 0, height: 8 }, elevation: 4, alignItems: 'center' },
  greetingTitle: { color: '#cbd5e1', fontSize: 16, marginBottom: 4 },
  greetingName: { color: '#f9fafb', fontSize: 28, fontWeight: '700', marginBottom: 8 },
  greetingSubtitle: { color: '#9ca3af', fontSize: 14, marginBottom: 20 },
  secondaryButton: { backgroundColor: '#1f2937', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10, marginBottom: 10 },
  secondaryText: { color: '#e5e7eb', fontWeight: '500', fontSize: 15 },
  logoutButton: { backgroundColor: '#ef4444', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10 },
  logoutText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});


