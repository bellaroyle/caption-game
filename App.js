import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import {
  createRoom,
  joinRoom,
  getUsersInRoom,
} from "./src/utils/databaseFuncs";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>There is a button here</Text>
      <Button onPress={() => createRoom("Tom")} title="Create room" />
      <Button onPress={() => joinRoom("AhSZNY", "Tom")} title="join room" />
      <Button onPress={() => getUsersInRoom("AhSZNY")} title="get users" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
});
