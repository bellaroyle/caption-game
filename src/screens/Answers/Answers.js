import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { getRoundAnswers } from '../../utils/databaseFuncs';
import { UserContext } from '../../Context/UserContext';
import AnswerAnim from '../../components/Animation/AnswerAnim';
import styles from './AnswersStyles';

export default function Answers(props) {
  const [loadingAnswers, setLoadingAnswers] = useState(true);
  const [answers, setAnswers] = useState([]);
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

  const animComplete = () => {
    navigate('Voting', { answers });
  };

  return (
    <View style={styles.screen}>
      <Text>Round 1: Answers</Text>
      <Image source={{ uri: picRef }} style={styles.pic} />
      {!loadingAnswers && (
        <AnswerAnim
          answers={answers}
          animComplete={() => navigate('Voting', { answers })}
        />
      )}
    </View>
  );
}
