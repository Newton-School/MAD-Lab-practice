import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RoutePropScreen({ navigation, route }) {
  const params = route?.params ?? {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Route Params</Text>
      <Text style={styles.text}>{JSON.stringify(params)}</Text>
      <View style={styles.spacer} />
      <Button title="goBack()" onPress={() => navigation.goBack()} />
      <View style={styles.spacer} />
      <Button title="push()" onPress={() => navigation.push('RoutePropScreen', { pushed: true, at: Date.now() })} />
      <View style={styles.spacer} />
      <Button title="popToTop()" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 12 },
  text: { textAlign: 'center' },
  spacer: { height: 12 },
});


