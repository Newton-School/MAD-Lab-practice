import React from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

export default function RoutePropScreen({ navigation, route }) {
  const params = route?.params || {};

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Card>
        <Card.Title title="Route Params" />
        <Card.Content>
          <Text>from: {String(params.from || '')}</Text>
          <Text>time: {String(params.time || '')}</Text>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={() => navigation.goBack()}>goBack()</Button>
      <Button
        mode="contained"
        onPress={() => navigation.push('RoutePropScreen', { from: 'RouteProp', time: new Date().toISOString() })}
      >
        push(RoutePropScreen)
      </Button>
      <Button mode="contained" onPress={() => navigation.popToTop()}>popToTop()</Button>
    </View>
  );
}


