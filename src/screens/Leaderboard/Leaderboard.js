import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getUsers } from '../../utils/databaseFuncs';
import { UserContext } from '../../Context/UserContext';
import AnswerCard from '../../components/AnswerCard';
import LeaderboardCard from '../../components/LeaderboardCard';
import styles from './LeaderboardStyles';

export default function Leaderboard(props) {
  const [answerData, setAnswerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, roomCode } = useContext(UserContext);
  const { isRound } = props.route.params;

  useEffect(() => {
    getUsers(roomCode).then((users) => {
      const answerData = users.map(({ name, answers, roundScore }) => {
        return { name, answers, roundScore, overallScore };
      });
      setAnswerData(answerData);
      setIsLoading(false);
    });
  }, []);

  //   const handleMoveOn=()

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
        <Text>Welcome to round leaderboard!</Text>
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
        <NewButton onPress={handleMoveOn}>
          <Text>Move on </Text>
        </NewButton>
      </View>
    );
  }

}
