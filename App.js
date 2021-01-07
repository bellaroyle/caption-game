import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { UserContext } from './src/Context/UserContext';

export default function App() {
  const [user, setUser] = useState(null);
  const [roomCode, setRoomCode] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser, roomCode, setRoomCode }}>
      <Navigator />
    </UserContext.Provider>
  );
}
