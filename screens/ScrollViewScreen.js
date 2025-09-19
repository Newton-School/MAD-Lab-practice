import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function ScrollViewScreen() {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      {items.map((label) => (
        <Card key={label}>
          <Card.Title title={label} />
          <Card.Content>
            <Text>{label} details go here.</Text>
          </Card.Content>
        </Card>
      ))}
      <View style={{ height: 24 }} />
    </ScrollView>
  );
}


