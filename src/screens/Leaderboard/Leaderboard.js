import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { startGame, addRound, startNewRound } from '../../utils/databaseFuncs';
import { getVotes } from '../../utils/utils';
import { UserContext } from '../../Context/UserContext';
import { firebase } from '../../firebase/config';
import NewButton from '../../components/NewButton';
import AnswerCard from '../../components/AnswerCard';
import LeaderboardCard from '../../components/LeaderboardCard';
import styles from './LeaderboardStyles';

export default function Leaderboard(props) {
  const [answerData, setAnswerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRound, setIsRound] = useState(true);
  const { user, roomCode, roundLimit } = useContext(UserContext);
  //   const { isRound } = props.route.params;
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
      }, 1000);
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

  if (isLoading) {
    return (
      <View>
        <Text>in Leaderboard</Text>
        <Text> Leaderboard is Loading </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        {isRound ? (
          <Text>Welcome to round leaderboard!</Text>
        ) : (
          <Text>Welcome to overall leaderboard!</Text>
        )}
        <FlatList
          data={answerData}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) =>
            isRound ? (
              <AnswerCard
                answerData={{
                  name: item.name,
                  answers: item.answers,
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
        />
        {!isRound && round === roundLimit && user.isHost ? (
          <NewButton style={styles.button} onPress={handleWinners}>
            <Text>Lets see who won!</Text>
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
    );
  }
}
