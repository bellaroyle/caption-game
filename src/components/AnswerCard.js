import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AnswerCard({
  answerData: { name, answers, roundScore },
}) {
  //   console.log(props);
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{answers}</Text>
      <Text>{roundScore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
  },
});
