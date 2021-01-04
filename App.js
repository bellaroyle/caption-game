import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { createRoom } from './src/utils/databaseFuncs';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>There is a button here</Text>
      <Button onPress={() => createRoom('Tom')} title="Create room" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
