import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function NewButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.newButton}>
        <Text>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  newButton: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
});
