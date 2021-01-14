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
    width: 250,
    padding: 10,
    paddingHorizontal: 20,
    margin: 10,
    shadowColor: '#2E294E',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 1,
  },
  name: {
    fontFamily: 'LilitaOne',
    fontSize: 20,
  },
  score: {
    fontFamily: 'LilitaOne',
    fontSize: 27,
    color: '#820263',
  },
});
