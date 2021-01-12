import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RoomCodeCard(props) {
  return (
    <View style={styles.RoomCodeCard}>
      <Text>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  RoomCodeCard: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#820263',
    shadowColor: '#2E294E',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.3,
    elevation: 1,
  },
});
