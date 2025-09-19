import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { saveCredentials, getStoredUsername } from '../utils/storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkStored = async () => {
      const storedUsername = await getStoredUsername();
      if (storedUsername) {
        navigation.reset({ index: 0, routes: [{ name: 'Home', params: { username: storedUsername } }] });
      }
    };
    checkStored();
  }, [navigation]);

  const onLogin = async () => {
    if (!username || !password) return;
    await saveCredentials(username, password);
    navigation.reset({ index: 0, routes: [{ name: 'Home', params: { username } }] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text style={[styles.brand, { color: '#22d3ee', fontWeight: 'bold', fontSize: 18 }]}>Belal's Navigation</Text>
      </View>

      <View style={[styles.card, { backgroundColor: '#1e293b', borderWidth: 1, borderColor: '#22d3ee' }]}> 
        <Text style={[styles.title, { color: '#22d3ee' }]}>Welcome, baby bois and gurls !</Text>
        <Text style={[styles.subtitle, { color: '#7dd3fc' }]}>Sign in to your personalized app</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#9aa0a6"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#9aa0a6"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={onLogin} activeOpacity={0.8}>
          <Text style={styles.primaryButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.footer, { color: '#22d3ee' }]}>© {new Date().getFullYear()} Belal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#0f172a' },
  header: { alignItems: 'center', marginBottom: 20 },
  logo: { width: 56, height: 56, borderRadius: 12, marginBottom: 8 },
  brand: { color: '#e5e7eb', fontSize: 16, letterSpacing: 1 },
  card: { backgroundColor: '#111827', padding: 20, borderRadius: 16, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 12, shadowOffset: { width: 0, height: 8 }, elevation: 4 },
  title: { color: '#f9fafb', fontSize: 22, fontWeight: '600', textAlign: 'center', marginBottom: 4 },
  subtitle: { color: '#9ca3af', fontSize: 14, textAlign: 'center', marginBottom: 16 },
  inputGroup: { marginBottom: 12 },
  label: { color: '#cbd5e1', marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#1f2937', backgroundColor: '#0b1220', color: '#e5e7eb', borderRadius: 10, padding: 12 },
  primaryButton: { backgroundColor: '#2563eb', paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginTop: 8 },
  primaryButtonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  footer: { color: '#64748b', textAlign: 'center', marginTop: 16 },
});


