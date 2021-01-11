import React, { useEffect, useState, useContext } from 'react';
import { Text, FlatList, SafeAreaView } from 'react-native';

import { firebase } from '../../firebase/config';
import { UserContext } from '../../Context/UserContext';

import {
  getAmountOfUsers,
  startAnswers,
  getUsers,
} from '../../utils/databaseFuncs';
import { shuffle } from '../../utils/utils';

import styles from './GameWaitingRoomStyles';
import NewButton from '../../components/NewButton';
import UserCard from '../../components/UserCard';

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
    <SafeAreaView style={styles.screen}>
      <Text>Game Waiting room</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard name={item.name} />}
        keyExtractor={(item) => item.name}
      />
      {users.length === usersInGame && user.isHost && (
        <NewButton onPress={handleStartButton}>
          <Text>Move to Voting </Text>
        </NewButton>
      )}
    </SafeAreaView>
  );
}
