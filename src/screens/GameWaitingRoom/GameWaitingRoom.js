import React, { useEffect, useState, useContext } from 'react';
import { Text, FlatList, SafeAreaView, View } from 'react-native';

import { firebase } from '../../firebase/config';
import { UserContext } from '../../Context/UserContext';
import { LinearGradient } from 'expo-linear-gradient';

import {
  getAmountOfUsers,
  startAnswers,
  getUsers,
} from '../../utils/databaseFuncs';
import { shuffle } from '../../utils/utils';

import styles from './GameWaitingRoomStyles';
import MainHeader from '../../components/MainHeader';
import NewButton from '../../components/NewButton';
import UserCard from '../../components/UserCard';
import ReusableCard from '../../components/ReusableCard';

export default function GameWaitingRoom(props) {
  const [users, setUsers] = useState([]);
  const [usersInGame, setUsersInGame] = useState(0);

  const {
    navigation: { replace },
  } = props;
  const { picRef } = props.route.params;

  const { user, roomCode } = useContext(UserContext);

  const roomDoc = firebase.firestore().collection('rooms').doc(roomCode);

  useEffect(() => {
    const unsubscribe = roomDoc.collection('waiting').onSnapshot((snap) => {
      const data = snap.docs.map((doc) => doc.data());
      setUsers(data);
      getAmountOfUsers(roomCode).then((res) => {
        setUsersInGame(res);
      });
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = roomDoc.onSnapshot((roomSnap) => {
      const { startAnswers } = roomSnap.data();

      if (startAnswers) replace('Answers', { picRef });
    });
    return () => unsubscribe();
  }, []);

  const handleStartButton = () => {
    getUsers(roomCode).then((users) => {
      const answers = users.map((user) => {
        return { name: user.name, answer: user.answers };
      });
      startAnswers(roomCode, shuffle(answers));
    });
  };

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#820263', '#C8005E']}
        style={styles.background}
      />
      <MainHeader text="Answers" />
      <SafeAreaView style={styles.screen}>
        <View style={styles.box}>
          <View style={styles.subBox}>
            <Text style={styles.subhead}>Answers from...</Text>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={users}
              renderItem={({ item }) => <UserCard name={item.name} />}
              keyExtractor={(item) => item.name}
              contentContainerStyle={{
                alignItems: 'center',
              }}
              style={styles.list}
            />
            <Text style={styles.playerCount}>
              {users.length} / {usersInGame}
            </Text>
          </View>
        </View>
        {users.length === usersInGame && user.isHost && (
          <NewButton onPress={handleStartButton}>
            <Text>Display answers</Text>
          </NewButton>
        )}
      </SafeAreaView>
    </View>
  );
}
