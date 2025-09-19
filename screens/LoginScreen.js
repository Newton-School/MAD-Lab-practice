import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkStored = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        navigation.reset({ index: 0, routes: [{ name: 'Home', params: { username: storedUsername } }] });
      }
    };
    checkStored();
  }, [navigation]);

  const onLogin = async () => {
    if (!username || !password) return;
    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('password', password);
    navigation.reset({ index: 0, routes: [{ name: 'Home', params: { username } }] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12 },
});


