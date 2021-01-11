import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RunnersUpCard({ data: { name, overallScore } }) {
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
  },
});
