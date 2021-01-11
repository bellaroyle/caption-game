import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import {
  getRoundAnswers,
  getAmountOfUsers,
  getRound,
} from '../../utils/databaseFuncs';

import { UserContext } from '../../Context/UserContext';
import AnswerAnim from '../../components/Animation/AnswerAnim';
import styles from './AnswersStyles';
import { shuffle } from '../../utils/utils';

export default function Answers(props) {
  const [loadingAnswers, setLoadingAnswers] = useState(true);
  const [answersLoaded, setAnswersLoaded] = useState(false);
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
    <View style={styles.screen}>
      <Text>Round {round}: Answers</Text>
      <Image source={{ uri: picRef }} style={styles.pic} />
      {!loadingAnswers && (
        <AnswerAnim
          answers={answers}
          animComplete={() => replace('Voting', { answers, round })}
        />
      )}
    </View>
  );
}
