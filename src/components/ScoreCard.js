import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScoreCard({ answerData: { name, answer, score } }) {
  return (
    <View style={styles.card}>
      <View style={styles.nameBox}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.answerBox}>
        <Text style={styles.answer}>{answer}</Text>
        <Text style={styles.score}>{score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    backgroundColor: '#fff',
    margin: 30,
    width: 350,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#2E294E',
    alignItems: 'center',
    shadowColor: '#2E294E',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 1,
  },
  nameBox: {
    position: 'absolute',
    top: -24,
    backgroundColor: '#2E294E',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    zIndex: 20,
  },
  name: {
    fontFamily: 'OpenSansBold',
    fontSize: 18,
    color: 'white',
  },
  answerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    borderRadius: 10,
    margin: 30,
    marginTop: 32,
    alignItems: 'center',
  },
  answer: {
    flex: 5,
    fontFamily: 'OpenSans',
    fontSize: 18,
    marginRight: 8,
  },
  score: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'LilitaOne',
    color: '#820263',
    fontSize: 45,
  },
});
