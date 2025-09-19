import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';

const RoutePropScreen = ({navigation, route}) => {
  const {message, timestamp, user} = route.params || {};

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handlePush = () => {
    // Push a new screen onto the stack
    navigation.push('RouteProp', {
      message: 'This is a pushed screen!',
      timestamp: new Date().toISOString(),
      user: user || 'Guest',
      pushed: true,
    });
  };

  const handlePopToTop = () => {
    
    navigation.popToTop();
  };

  const handleReplace = () => {
    // Replace current screen with Home
    navigation.replace('Home', {username: user || 'Guest'});
  };

  const handleReset = () => {
    Alert.alert(
      'Reset Navigation',
      'This will reset the entire navigation stack to Login screen. Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          },
        },
      ]
    );
  };

  const handleNavigate = () => {
    // Navigate to a different screen
    navigation.navigate('ScrollView');
  };

  const formatTimestamp = (ts) => {
    if (!ts) return 'No timestamp';
    return new Date(ts).toLocaleString();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleGoBack}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>RouteProp Demo</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Route Parameters</Text>
          
          <View style={styles.paramCard}>
            <Text style={styles.paramLabel}>Message:</Text>
            <Text style={styles.paramValue}>{message || 'No message provided'}</Text>
          </View>

          <View style={styles.paramCard}>
            <Text style={styles.paramLabel}>User:</Text>
            <Text style={styles.paramValue}>{user || 'No user provided'}</Text>
          </View>

          <View style={styles.paramCard}>
            <Text style={styles.paramLabel}>Timestamp:</Text>
            <Text style={styles.paramValue}>{formatTimestamp(timestamp)}</Text>
          </View>

          {route.params?.pushed && (
            <View style={styles.pushedIndicator}>
              <Text style={styles.pushedText}>📱 This screen was pushed!</Text>
            </View>
          )}
        </View>

        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Navigation Actions</Text>
          
          <TouchableOpacity style={styles.actionButton} onPress={handleGoBack}>
            <Text style={styles.actionButtonText}>goBack()</Text>
            <Text style={styles.actionButtonSubtext}>Go back to previous screen</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handlePush}>
            <Text style={styles.actionButtonText}>push()</Text>
            <Text style={styles.actionButtonSubtext}>Push new screen onto stack</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handlePopToTop}>
            <Text style={styles.actionButtonText}>popToTop()</Text>
            <Text style={styles.actionButtonSubtext}>Pop all screens except first</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handleReplace}>
            <Text style={styles.actionButtonText}>replace()</Text>
            <Text style={styles.actionButtonSubtext}>Replace current screen with Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handleNavigate}>
            <Text style={styles.actionButtonText}>navigate()</Text>
            <Text style={styles.actionButtonSubtext}>Navigate to ScrollView screen</Text>
          </TouchableOpacity>

          
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  infoSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  paramCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  paramLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 5,
  },
  paramValue: {
    fontSize: 16,
    color: '#333',
  },
  pushedIndicator: {
    backgroundColor: '#e8f5e8',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  pushedText: {
    fontSize: 16,
    color: '#2d5a2d',
    fontWeight: '500',
  },
  actionsSection: {
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  actionButtonSubtext: {
    fontSize: 14,
    color: '#666',
  },
  dangerButton: {
    backgroundColor: '#ffe6e6',
  },
  dangerButtonText: {
    color: '#FF3B30',
  },
  stackInfo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  stackText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
});

export default RoutePropScreen;
