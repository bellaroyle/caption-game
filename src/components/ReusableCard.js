import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReusableCard(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#820263',
    width: 200,
    height: 50,
    padding: 10,
    margin: 10,
    shadowColor: '#2E294E',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.3,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
