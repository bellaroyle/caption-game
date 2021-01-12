import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserCard({ name }) {
  return (
    <View style={styles.usernameContainer}>
      <Text style={styles.usernames}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  usernameContainer: {
    minWidth: '80%',
    alignItems: 'center',
    borderBottomColor: '#2E294E',
    borderBottomWidth: 1,
    padding: '2%',
  },
  usernames: {
    fontSize: 22,
    marginVertical: 10,
    fontFamily: 'LilitaOne',
    color: '#2E294E',
    margin: 60,
  },
});
