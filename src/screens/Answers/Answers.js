import React, { useEffect, useState, useContext } from 'react';
import { Text, Image, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { UserContext } from '../../Context/UserContext';

import { getRoundAnswers, getRound } from '../../utils/databaseFuncs';

import MainHeader from '../../components/MainHeader';
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
    <View style={styles.screen}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#820263', '#C8005E']}
        style={styles.background}
      />
      <MainHeader text="Answers" />
      <SafeAreaView style={styles.screen}>
        <View style={styles.picContainer}>
          <Image source={{ uri: picRef }} style={styles.pic} />
        </View>
        {!loadingAnswers && (
          <AnswerAnim
            answers={answers}
            animComplete={() => replace('Voting', { answers, round })}
          />
        )}
      </SafeAreaView>
    </View>
  );
}
