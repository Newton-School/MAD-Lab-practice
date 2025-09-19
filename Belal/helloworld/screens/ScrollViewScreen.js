import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const ANIMALS = [
  { id: '1', name: 'Lion', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZWlPjghR3F6rno2RtA56T9mRyUL_BWILiAmpxP0-npm6nmw-Gsm9AFDYLAl8paow4CEKMeRHaQn39tB4VniZan8svg2JIpXXOO6L84F4' },
  { id: '2', name: 'Tiger', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqxmS65qOTq0jj1-uHcCRWtTo0XPeQCmF3W7HDE5HG8zSdfulrthBA6C8o3YzaYYntem4Nk2wi3ceZO_dBS3LBqRY-YcPPFrSDakVAF1y_A' },
  { id: '3', name: 'Elephant', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzIYJTzuI35t3y9PCr3D6j0cNUDelYBJM6NOT77Ehr0JpCSBHiFcNqSIeeR6ghe1_ipEDXjlbWW8mg2PDEDQ4mD9BuVecKgN92AlnztiIUA' },
  { id: '4', name: 'Giraffe', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQERWOCa32DXeB8kE2BmErpBgP_NiPrcP_HJVopfL1Z_-eSZGHDkhDW8G5ph_nmxySAUHhK1tNu2g4sjaqxb3mphfiiv3jsp48Oj3O9UVfT' },
  { id: '5', name: 'Zebra', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uEqDJR90veYdIM15F_zvo4Bwk35CFKLUMIHrnXK4NVqZoOE&s' },
];

export default function ScrollViewScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {ANIMALS.map((animal) => (
        <View key={animal.id} style={styles.card}>
          <Image source={{ uri: animal.image }} style={styles.animalImage} />
          <Text style={styles.cardTitle}>{animal.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 16 },
  card: { backgroundColor: '#111827', borderRadius: 12, padding: 16, marginBottom: 16, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } },
  animalImage: { width: 120, height: 120, borderRadius: 16, marginBottom: 10 },
  cardTitle: { color: '#22d3ee', fontSize: 20, fontWeight: '700', marginBottom: 4 },
});


