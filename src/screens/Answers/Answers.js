import React, { useEffect, useState, useContext } from 'react';
import { Text, Image, SafeAreaView } from 'react-native';

import { UserContext } from '../../Context/UserContext';

import { getRoundAnswers, getRound } from '../../utils/databaseFuncs';

import AnswerAnim from '../../components/Animation/AnswerAnim';
import styles from './AnswersStyles';

export default function Answers(props) {
  const [loadingAnswers, setLoadingAnswers] = useState(true);
  const [round, setRound] = useState();
  const [answers, setAnswers] = useState([]);

  const { roomCode } = useContext(UserContext);

  const {
    navigation: { replace },
  } = props;
  const { picRef } = props.route.params;

  useEffect(() => {
    getRound(roomCode).then((round) => {
      setRound(round);
    });
    getRoundAnswers(roomCode).then((result) => {
      setAnswers(result);
      setLoadingAnswers(false);
    });
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <Text>Round {round}: Answers</Text>
      <Image source={{ uri: picRef }} style={styles.pic} />
      {!loadingAnswers && (
        <AnswerAnim
          answers={answers}
          animComplete={() => replace('Voting', { answers, round })}
        />
      )}
    </SafeAreaView>
  );
}
