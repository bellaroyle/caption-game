import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WinnersCard({ data: { name, overallScore } }) {
  return (
    <View style={styles.container}>
      <View style={styles.subBox}>
        <Ionicons name="trophy" size={60} color="gold" />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.points}>Points: {overallScore}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#820263',
    padding: 20,
    margin: 25,
    shadowColor: '#2E294E',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.3,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '70%',
  },
  subBox: {
    position: 'absolute',
    top: -47,
    right: -50,
    backgroundColor: '#2E294E',
    paddingHorizontal: 18,
    borderRadius: 90,
    padding: 15,
    alignItems: 'center',
    zIndex: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  points: {
    fontSize: 35,
  },
});
