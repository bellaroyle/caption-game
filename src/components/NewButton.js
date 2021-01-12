import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NewButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...props.style, ...styles.newButton }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  newButton: {
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
  buttonText: {
    fontFamily: 'LilitaOne',
    fontSize: 22,
    color: '#2E294E',
  },
});
