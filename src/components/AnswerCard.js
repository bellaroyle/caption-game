import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AnswerCard({ answerData: { name, answers, score } }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{answers}</Text>
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
