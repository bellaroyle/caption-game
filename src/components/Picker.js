import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Picker({ numRounds, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress(-1)}>
        <Ionicons name="chevron-down-circle" size={40} color="white" />
      </TouchableOpacity>
      <View style={styles.roundBox}>
        <Text style={styles.roundCounter}>{numRounds}</Text>
      </View>
      <TouchableOpacity onPress={() => onPress(1)}>
        <Ionicons name="chevron-up-circle" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundBox: {
    backgroundColor: 'white',
    width: 70,
    borderRadius: 5,
    height: 40,
    marginLeft: 5,
    marginRight: 7,
    justifyContent: 'center',
  },
  roundCounter: {
    fontFamily: 'LilitaOne',
    fontSize: 20,
    marginHorizontal: 10,
    textAlign: 'center',
  },
});
