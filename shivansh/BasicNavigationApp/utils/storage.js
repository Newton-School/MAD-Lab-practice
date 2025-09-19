import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  username: 'username',
  password: 'password',
};

export async function setItem(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}

export async function getItem(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    return null;
  }
}

export async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export async function saveCredentials(username, password) {
  await setItem(STORAGE_KEYS.username, username);
  await setItem(STORAGE_KEYS.password, password);
}

export async function getStoredUsername() {
  return getItem(STORAGE_KEYS.username);
}

export async function clearCredentials() {
  await removeItem(STORAGE_KEYS.username);
  await removeItem(STORAGE_KEYS.password);
}

export default {
  setItem,
  getItem,
  removeItem,
  saveCredentials,
  getStoredUsername,
  clearCredentials,
  STORAGE_KEYS,
};


