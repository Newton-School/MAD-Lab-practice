import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text, HelperText, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const hasUsernameError = username.trim().length === 0;
  const hasPasswordError = password.trim().length === 0;

  const onSubmit = async () => {
    if (hasUsernameError || hasPasswordError) return;
    setSubmitting(true);
    try {
      await AsyncStorage.setItem('username', username.trim());
      await AsyncStorage.setItem('password', password);
      navigation.replace('Home', { username: username.trim() });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16, justifyContent: 'center' }}>
      <Card>
        <Card.Title title="Welcome" subtitle="Please sign in" />
        <Card.Content>
          <TextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            left={<TextInput.Icon icon="account" />}
            style={{ marginBottom: 8 }}
          />
          {hasUsernameError && <HelperText type="error">Username is required</HelperText>}
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            left={<TextInput.Icon icon="lock" />}
            style={{ marginBottom: 8 }}
          />
          {hasPasswordError && <HelperText type="error">Password is required</HelperText>}
          <Button mode="contained" onPress={onSubmit} loading={submitting} disabled={hasUsernameError || hasPasswordError || submitting}>
            Login
          </Button>
        </Card.Content>
      </Card>
      <Text accessibilityRole="text" style={{ textAlign: 'center', marginTop: 12 }}>
        Demo app with Navigation & AsyncStorage
      </Text>
    </View>
  );
}


