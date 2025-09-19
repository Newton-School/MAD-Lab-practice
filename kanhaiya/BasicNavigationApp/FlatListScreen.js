import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

const FlatListScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([
    {id: '1', name: 'John Doe', email: 'john@example.com', role: 'Developer'},
    {id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Designer'},
    {id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager'},
  ]);



  const renderItem = ({item, index}) => (
    <View style={[styles.itemContainer, index % 2 === 0 ? styles.evenItem : styles.oddItem]}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {item.name.split(' ').map(n => n[0]).join('')}
        </Text>
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemEmail}>{item.email}</Text>
        <Text style={styles.itemRole}>{item.role}</Text>
      </View>
    </View>
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.navHeaderTitle}>FlatList Demo</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  navHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 14,
    color: '#e6f3ff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  evenItem: {
    backgroundColor: '#fff',
  },
  oddItem: {
    backgroundColor: '#f8f9fa',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  itemEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  itemRole: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
  },
  
  
});

export default FlatListScreen;
