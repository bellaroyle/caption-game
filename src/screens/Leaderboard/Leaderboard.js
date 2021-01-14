import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { UserContext } from '../../Context/UserContext';
import { firebase } from '../../firebase/config';

import { startGame, addRound, startNewRound } from '../../utils/databaseFuncs';
import { getVotes } from '../../utils/utils';

import MainHeader from '../../components/MainHeader';
import NewButton from '../../components/NewButton';
import ScoreCard from '../../components/ScoreCard';
import LeaderboardCard from '../../components/LeaderboardCard';

import styles from './LeaderboardStyles';

export default function Leaderboard(props) {
  const [answerData, setAnswerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRound, setIsRound] = useState(true);

  const { user, roomCode, roundLimit } = useContext(UserContext);

  const {
    navigation: { replace },
  } = props;
  const { round } = props.route.params;

  const roomDoc = firebase.firestore().collection('rooms').doc(roomCode);

  useEffect(() => {
    const unsubscribe = roomDoc.collection('users').onSnapshot((snap) => {
      const data = snap.docs.map((doc) => {
        const { name, answers, roundScore, overallScore } = doc.data();
        return { name, answers, roundScore, overallScore };
      });
      const answerData = isRound
        ? data.sort((a, b) => (a.roundScore < b.roundScore ? 1 : -1))
        : data.sort((a, b) => (a.overallScore < b.overallScore ? 1 : -1));

      setAnswerData(answerData);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [isRound]);

  useEffect(() => {
    let interval;
    if (getVotes(answerData) === answerData.length) {
      interval = setTimeout(() => {
        setIsRound(false);
      }, 5000);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [answerData]);

  useEffect(() => {
    const unsubscribe = roomDoc.onSnapshot((roomSnap) => {
      const { startGame } = roomSnap.data();
      if (startGame && round !== roundLimit) replace('Round');
      else {
        if (startGame) replace('Winners');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleNewRound = () => {
    addRound(roomCode).then(() => {
      startNewRound(roomCode);
    });
  };

  const handleWinners = () => {
    startGame(roomCode);
  };

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#820263', '#C8005E']}
        style={styles.background}
      />
      {isRound ? (
        <MainHeader text="Scores" />
      ) : (
        <MainHeader text="Leaderboard" />
      )}

      <SafeAreaView style={styles.safeView}>
        {isRound ? (
          <Text style={styles.round}>Round {round}</Text>
        ) : round === roundLimit ? (
          <Text style={styles.round}>Final Results</Text>
        ) : (
          <Text style={styles.round}>After round {round}</Text>
        )}
        {isLoading ? (
          <Text> Leaderboard is Loading </Text>
        ) : (
          <View>
            <FlatList
              data={answerData}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) =>
                isRound ? (
                  <ScoreCard
                    answerData={{
                      name: item.name,
                      answer: item.answers,
                      score: item.roundScore,
                    }}
                  />
                ) : (
                  <LeaderboardCard
                    scoreData={{
                      name: item.name,
                      score: item.overallScore,
                    }}
                  />
                )
              }
              style={styles.answerList}
            />
            {!isRound && round === roundLimit && user.isHost ? (
              <NewButton style={styles.button} onPress={handleWinners}>
                <Text>To the podium!</Text>
              </NewButton>
            ) : (
              !isRound &&
              user.isHost && (
                <NewButton style={styles.button} onPress={handleNewRound}>
                  <Text>Begin next round</Text>
                </NewButton>
              )
            )}
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
