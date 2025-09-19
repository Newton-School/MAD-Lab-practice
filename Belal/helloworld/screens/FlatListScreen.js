import React, { useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ANIMALS = [
  { id: '1', name: 'Lion', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZWlPjghR3F6rno2RtA56T9mRyUL_BWILiAmpxP0-npm6nmw-Gsm9AFDYLAl8paow4CEKMeRHaQn39tB4VniZan8svg2JIpXXOO6L84F4' },
  { id: '2', name: 'Tiger', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqxmS65qOTq0jj1-uHcCRWtTo0XPeQCmF3W7HDE5HG8zSdfulrthBA6C8o3YzaYYntem4Nk2wi3ceZO_dBS3LBqRY-YcPPFrSDakVAF1y_A' },
  { id: '3', name: 'Elephant', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzIYJTzuI35t3y9PCr3D6j0cNUDelYBJM6NOT77Ehr0JpCSBHiFcNqSIeeR6ghe1_ipEDXjlbWW8mg2PDEDQ4mD9BuVecKgN92AlnztiIUA' },
  { id: '4', name: 'Giraffe', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQERWOCa32DXeB8kE2BmErpBgP_NiPrcP_HJVopfL1Z_-eSZGHDkhDW8G5ph_nmxySAUHhK1tNu2g4sjaqxb3mphfiiv3jsp48Oj3O9UVfT' },
  { id: '5', name: 'Zebra', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uEqDJR90veYdIM15F_zvo4Bwk35CFKLUMIHrnXK4NVqZoOE&s' },
];

export default function FlatListScreen() {
  const renderItem = useCallback(({ item }) => (
    <View style={styles.row}>
      <Image source={{ uri: item.image }} style={styles.animalImage} />
      <Text style={styles.title}>{item.name}</Text>
      <TouchableOpacity style={styles.rowButton} onPress={() => {}}>
        <Text style={styles.rowButtonText}>View</Text>
      </TouchableOpacity>
    </View>
  ), []);

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={ANIMALS}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { paddingVertical: 8 },
  row: { backgroundColor: '#111827', marginHorizontal: 16, padding: 16, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  animalImage: { width: 56, height: 56, borderRadius: 12, marginRight: 12 },
  title: { color: '#e5e7eb', fontSize: 16, fontWeight: '600', flex: 1 },
  rowButton: { backgroundColor: '#22d3ee', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
  rowButtonText: { color: '#fff', fontWeight: '600' },
  separator: { height: 10 },
});


