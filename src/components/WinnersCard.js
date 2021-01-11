import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WinnersCard({ data: { name, overallScore } }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{overallScore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    height: 40,
  },
});
