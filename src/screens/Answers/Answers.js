import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { getRoundAnswers } from '../../utils/databaseFuncs';
import { UserContext } from '../../Context/UserContext';
import AnswerAnim from '../../components/Animation/AnswerAnim';
import styles from './AnswersStyles';

export default function Answers(props) {
  const [loadingAnswers, setLoadingAnswers] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [answerIndex, setAnswerIndex] = useState(0);
  const { roomCode } = useContext(UserContext);

  const {
    navigation: { navigate },
  } = props;
  const { picRef } = props.route.params;

  useEffect(() => {
    getRoundAnswers(roomCode).then((result) => {
      setAnswers(result);
      setLoadingAnswers(false);
    });
  }, []);

  useEffect(() => {
    let interval;
    if (answerIndex < answers.length - 1) {
      interval = setTimeout(() => {
        setAnswerIndex(answerIndex + 1);
      }, 4500);
    } else {
      interval = setTimeout(() => {
        navigate('Voting', { answers });
      }, 4500);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [answerIndex, answers]);

  return (
    <View style={styles.screen}>
      <Text>Round 1: Answers</Text>
      <Image source={{ uri: picRef }} style={styles.pic} />
      {!loadingAnswers && <AnswerAnim answer={answers[answerIndex].answer} />}
    </View>
  );
}
