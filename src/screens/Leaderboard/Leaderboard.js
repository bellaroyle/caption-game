import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getUsers } from '../../utils/databaseFuncs';
import { UserContext } from '../../Context/UserContext';
import AnswerCard from '../../components/AnswerCard';
import styles from './LeaderboardStyles';

export default function Leaderboard() {
  const [answerData, setAnswerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, roomCode } = useContext(UserContext);

  useEffect(() => {
    getUsers(roomCode).then((users) => {
      const answerData = users.map(({ name, answers, roundScore }) => {
        return { name, answers, roundScore };
      });
      setAnswerData(answerData);
      setIsLoading(false);
    });
  }, []);

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
          renderItem={({ item }) => (
            <AnswerCard
              answerData={{
                name: item.name,
                answers: item.answers,
                roundScore: item.roundScore,
              }}
            />
          )}
        />
      </View>
    );
  }

}
