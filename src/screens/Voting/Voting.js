import React, { useEffect, useState, useContext } from "react";
import { View, Text, Button } from "react-native";
import { firebase } from "../../firebase/config";
import NewButton from "../../components/NewButton";
import { UserContext } from "../../Context/UserContext";
import styles from "./VotingStyles";

export default function Voting(props) {
  const [answers, setAnswers] = useState([]);
  const { user, roomCode } = useContext(UserContext);
  const {
    navigation: { navigate },
  } = props;

  const roomDoc = firebase.firestore().collection("rooms").doc(roomCode);

  useEffect(() => {});

  return (
    <View>
      <Text>Click on one of the answers below to give it your vote!</Text>
      <Text>Remember, you can't vote for your own!</Text>
    </View>
  );
}
