import React, { useEffect, useContext, useState } from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

import { UserContext } from '../../Context/UserContext';
import {
  getScores,
  getUsers,
  deleteUserFromRoom,
  deleteRoom,
} from '../../utils/databaseFuncs';

import WinnersCard from '../../components/WinnersCard';
import NewButton from '../../components/NewButton';
import MainHeader from '../../components/MainHeader';

import styles from './WinnersStyles';

export default function Winners(props) {
  const [winners, setWinners] = useState([{ name: 'user', overallScore: 0 }]);

  const { user, roomCode } = useContext(UserContext);

  const {
    navigation: { replace },
  } = props;

  useEffect(() => {
    getScores(roomCode).then((users) => {
      const scores = users.map((user) => {
        return user.overallScore;
      });
      const maxScore = Math.max(...scores);
      const winners = users.filter((user) => {
        return user.overallScore === maxScore;
      });
      setWinners(winners);
    });
  }, []);

  const renderListItem = (itemData) => {
    // console.log(itemData.item);
    return <WinnersCard data={itemData.item} />;
  };

  const handleGoHome = () => {
    deleteUserFromRoom(user.username, roomCode).then(() => {
      getUsers(roomCode).then((users) => {
        if (users.length === 0) {
          deleteRoom(roomCode);
        }
      });
    });
    replace('Welcome');
  };

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#820263', '#C8005E']}
        style={styles.background}
      />
      <MainHeader text="Winners" />
      <SafeAreaView style={styles.screen}>
        <View style={styles.answerList}>
          {winners.map((winner) => {
            return (
              <Animatable.View animation="tada" key={winner.name} delay={500}>
                <WinnersCard data={winner} />
              </Animatable.View>
            );
          })}
        </View>
      </SafeAreaView>
      <View style={styles.button}>
        <NewButton onPress={handleGoHome}>
          <Text>Home</Text>
        </NewButton>
      </View>
    </View>
  );
}
