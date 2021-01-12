import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserCard(props) {
  return (
    <View style={styles.UserCard}>
      <Text>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  UserCard: {
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});
