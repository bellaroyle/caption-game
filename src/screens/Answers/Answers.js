import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, Image } from "react-native";
import { getPic, getPicOrder, getAnswers } from "../../utils/databaseFuncs";
import { UserContext } from "../../Context/UserContext";
import NewButton from "../../components/NewButton";
import styles from "./AnswersStyles";

const round = 1;

export default function Answers(props) {
  const [picRef, setPicRef] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { answers, setAnswers } = useState([]);
  const { user, roomCode } = useContext(UserContext);

  // const {
  //   navigation: { navigate },
  // } = props;

  useEffect(() => {
    getPicOrder(roomCode)
      .then((picOrder) => {
        getPic(picOrder, round).then((picRef) => {
          setPicRef(picRef);
          setIsLoading(false);
        });
      })
      .then(() => {
        getAnswers(roomCode).then((answers) => {
          console.log(answers);
          setAnswers(answers);
        });
      });
  }, []);

  // const submitAnswer = () => {
  //   postAnswerToUser(user.username, roomCode, answer).then(() => {
  //     navigate("GameWaitingRoom", { roomCode });
  //   });
  // };

  if (isLoading) {
    return (
      <View>
        <Text>Round 1: Answers</Text>
        <Text>Image is Loading</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <Text>Round 1: Answers</Text>
        <Image source={{ uri: picRef }} style={styles.pic} />
        {/* <TextInput
          multiline={true}
          onChangeText={(text) => setAnswer(text)}
          value={answer}
          style={styles.input}
        />
        <NewButton onPress={submitAnswer}>
          <Text>Submit answer</Text>
        </NewButton> */}
      </View>
    );
  }
}
