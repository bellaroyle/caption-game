import React, { useState, useContext } from "react";
import { View, Text, TextInput } from "react-native";
import NewButton from "../../components/NewButton";
import { UserContext } from "../../Context/UserContext";
import { createRoom } from "../../utils/databaseFuncs";
import styles from "./HostStyles";

export default function Host(props) {
  const [hostName, setHostName] = useState("");
  const {
    navigation: { navigate },
  } = props;

  const { user, setUser } = useContext(UserContext);

  const createGame = () => {
    createRoom(hostName).then((roomCode) => {
      setUser(hostName);
      console.log(user);
      navigate("WaitingRoom", { roomCode });
    });
  };

  return (
    <View style={styles.hostScreen}>
      <Text>Please enter your name to host game</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setHostName(text)}
        value={hostName}
        autoCapitalize="none"
      />
      <NewButton onPress={createGame}>
        <Text>Create Game</Text>
      </NewButton>
    </View>
  );
}
