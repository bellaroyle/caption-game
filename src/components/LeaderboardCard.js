import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LeaderboardCard({ scoreData: { name, score } }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#820263',
    width: 200,
    height: 50,
    padding: 10,
    margin: 10,
  },
  name: {
    fontFamily: 'LilitaOne',
    fontSize: 22,
  },
  score: {
    fontFamily: 'LilitaOne',
    fontSize: 25,
    color: '#2E294E',
  },
});
