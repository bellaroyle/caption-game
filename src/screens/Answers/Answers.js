import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import {
  getPic,
  getPicOrder,
  getRoundAnswers,
  getAmountOfUsers,
  getRound,
} from '../../utils/databaseFuncs';
import { UserContext } from '../../Context/UserContext';
import NewButton from '../../components/NewButton';
import styles from './AnswersStyles';
import { shuffle } from '../../utils/utils';

export default function Answers(props) {
  const [picRef, setPicRef] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [answersLoaded, setAnswersLoaded] = useState(false);
  const [round, setRound] = useState();
  const [answers, setAnswers] = useState([]);
  const [answerIndex, setAnswerIndex] = useState(0);
  const { user, roomCode } = useContext(UserContext);

  const {
    navigation: { replace },
  } = props;

  useEffect(() => {
    getRound(roomCode)
      .then((round) => {
        setRound(round);
        getPicOrder(roomCode).then((picOrder) => {
          getPic(picOrder, round).then((picRef) => {
            setPicRef(picRef);
            setIsLoading(false);
          });
        });
      })
      .then(() => {
        getRoundAnswers(roomCode).then((result) => {
          setAnswers(result);
          setAnswersLoaded(true);
        });
      });
  }, []);

  useEffect(() => {
    let interval;
    if (answersLoaded) {
      if (answerIndex < answers.length - 1) {
        interval = setTimeout(() => {
          setAnswerIndex(answerIndex + 1);
        }, 1000);
      } else {
        interval = setTimeout(() => {
          replace('Voting', { answers });
        }, 1000);
      }
    }

    return () => {
      clearTimeout(interval);
    };
  }, [answerIndex, answers, answersLoaded]);

  if (isLoading) {
    return (
      <View>
        <Text>Round {round}: Answers</Text>
        <Text>Image is Loading</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <Text>Round {round}: Answers</Text>
        <Image source={{ uri: picRef }} style={styles.pic} />
        <Text>{answers[answerIndex].answer}</Text>
      </View>
    );
  }
}
