import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, Divider, Text } from 'react-native-paper';

const DATA = Array.from({ length: 30 }, (_, i) => ({ id: String(i + 1), title: `Row ${i + 1}` }));

export default function FlatListScreen() {
  return (
    <FlatList
      contentContainerStyle={{ padding: 16 }}
      data={DATA}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Divider}
      renderItem={({ item }) => (
        <Card style={{ marginBottom: 12 }}>
          <Card.Title title={item.title} />
          <Card.Content>
            <Text>Item id: {item.id}</Text>
          </Card.Content>
        </Card>
      )}
    />
  );
}


