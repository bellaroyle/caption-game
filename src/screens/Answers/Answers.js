import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, Image } from "react-native";
import {
  getPic,
  getPicOrder,
  getRoundAnswers,
  getAmountOfUsers,
} from "../../utils/databaseFuncs";
import { UserContext } from "../../Context/UserContext";
import NewButton from "../../components/NewButton";
import styles from "./AnswersStyles";
import { shuffle } from "../../utils/utils";

const round = 1;

export default function Answers(props) {
  const [picRef, setPicRef] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [answersLoaded, setAnswersLoaded] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [answerIndex, setAnswerIndex] = useState(0);
  const { user, roomCode } = useContext(UserContext);

  const {
    navigation: { navigate },
  } = props;

  useEffect(() => {
    getPicOrder(roomCode)
      .then((picOrder) => {
        getPic(picOrder, round).then((picRef) => {
          setPicRef(picRef);
          setIsLoading(false);
        });
      })
      .then(() => {
        getRoundAnswers(roomCode).then((result) => {
          setAnswers(result);
          setAnswersLoaded(true);
          console.log(answersLoaded);
        });
      });
  }, []);

  useEffect(() => {
    let interval;
    if (answersLoaded) {
      console.log(answerIndex, "<---------- answerIndexx");
      console.log(answers.length, "<---------- answers.length");

      if (answerIndex < answers.length - 1) {
        interval = setTimeout(() => {
          setAnswerIndex(answerIndex + 1);
        }, 10000);
      } else {
        navigate("Voting");
      }
    }

    // console.log(props.route, "<---------props.route");

    // }
    return () => {
      clearTimeout(interval);
    };
  }, [answerIndex, answers, answersLoaded]);

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
        <Text>{answers[answerIndex].answer}</Text>
      </View>
    );
  }
}
