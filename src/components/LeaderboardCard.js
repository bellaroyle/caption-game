import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LeaderboardCard({ scoreData: { name, score } }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
  },
});
