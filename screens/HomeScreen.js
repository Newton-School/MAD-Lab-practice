import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation, route }) {
  const [username, setUsername] = useState(route?.params?.username || '');

  useEffect(() => {
    (async () => {
      if (!username) {
        const stored = await AsyncStorage.getItem('username');
        if (stored) setUsername(stored);
      }
    })();
  }, [username]);

  const onLogout = async () => {
    await AsyncStorage.multiRemove(['username', 'password']);
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Card>
        <Card.Title title={`Welcome, ${username || 'Guest'}`} />
        <Card.Content>
          <Text>Choose a screen to explore:</Text>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={() => navigation.navigate('ScrollViewScreen')}>Open ScrollView</Button>
      <Button mode="contained" onPress={() => navigation.navigate('FlatListScreen')}>Open FlatList</Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RoutePropScreen', { from: 'Home', time: new Date().toISOString() })}
      >
        Open RouteProp (with params)
      </Button>

      <View style={{ flex: 1 }} />
      <Button mode="outlined" onPress={onLogout} icon="logout">
        Logout
      </Button>
    </View>
  );
}


