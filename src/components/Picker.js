import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Picker({ numRounds, onPress }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-down-circle"
        size={32}
        color="white"
        onPress={() => onPress(-1)}
      />
      <Text style={styles.roundCounter}>{numRounds}</Text>
      <Ionicons
        name="chevron-up-circle"
        size={32}
        color="white"
        onPress={() => onPress(1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  roundCounter: {
    backgroundColor: 'white',
    width: 70,
    marginHorizontal: 10,
  },
});
