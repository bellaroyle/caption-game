import React, { useEffect, useState, useContext } from 'react';
import { Text, FlatList, SafeAreaView } from 'react-native';

import { UserContext } from '../../Context/UserContext';
import { firebase } from '../../firebase/config';

import { startGame, setAmountOfUsers } from '../../utils/databaseFuncs';

import UserCard from '../../components/UserCard';
import NewButton from '../../components/NewButton';
import styles from './WaitingRoomStyles';

export default function WaitingRoom(props) {
  const [users, setUsers] = useState([]);

  const {
    navigation: { replace },
  } = props;

  const { user, roomCode } = useContext(UserContext);

  const roomDoc = firebase.firestore().collection('rooms').doc(roomCode);

  useEffect(() => {
    const unsubscribe = roomDoc.collection('users').onSnapshot((snap) => {
      const data = snap.docs.map((doc) => doc.data());
      setUsers(data);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = roomDoc.onSnapshot((roomSnap) => {
      const { startGame } = roomSnap.data();
      if (startGame) replace('Round');
    });
    return () => unsubscribe();
  }, []);

  const handleStartButton = () => {
    setAmountOfUsers(roomCode, users.length).then(() => {
      startGame(roomCode);
    });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.roomCode}>You are in room {roomCode}!</Text>
      <Text>Please share this code with your friends</Text>
      {users.length !== 0 ? (
        <FlatList
          data={users}
          renderItem={({ item }) => <UserCard name={item.name} />}
          keyExtractor={(item) => item.name}
          style={styles.list}
        />
      ) : (
        <Text>Is loading...</Text>
      )}
      {users.length > 0 && user.isHost && (
        <NewButton style={styles.button} onPress={handleStartButton}>
          <Text>Begin Round 1</Text>
        </NewButton>
      )}
    </SafeAreaView>
  );
}
