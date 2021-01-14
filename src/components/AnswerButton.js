import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AnswerwButton(props) {
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 280,
    margin: 10,
    shadowColor: '#2E294E',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.3,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  buttonText: {
    fontFamily: 'OpenSans',
    fontSize: 18,
  },
});
