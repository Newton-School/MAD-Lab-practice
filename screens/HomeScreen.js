import React, { useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation, route }) {
  const username = route?.params?.username ?? '';

  const logout = useCallback(async () => {
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('password');
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {username}</Text>
      <Button title="ScrollView Screen" onPress={() => navigation.navigate('ScrollViewScreen')} />
      <View style={styles.spacer} />
      <Button title="FlatList Screen" onPress={() => navigation.navigate('FlatListScreen')} />
      <View style={styles.spacer} />
      <Button
        title="RouteProp Screen"
        onPress={() => navigation.navigate('RoutePropScreen', { from: 'Home', timestamp: Date.now() })}
      />
      <View style={styles.spacer} />
      <Button title="Logout" color="#d33" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 24 },
  spacer: { height: 12 },
});


