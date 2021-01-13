import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { UserContext } from '../../Context/UserContext';
import { firebase } from '../../firebase/config';

import { startGame, setAmountOfUsers } from '../../utils/databaseFuncs';

import NewButton from '../../components/NewButton';
import MainHeader from '../../components/MainHeader';
import RoomCodeCard from '../../components/RoomCodeCard';
import styles from './WaitingRoomStyles';
import UserCard from '../../components/UserCard';

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
    <View style={styles.screen}>
      <LinearGradient
        colors={['#820263', '#C8005E']}
        style={styles.background}
      />
      <MainHeader text="Game Lobby" />
      <SafeAreaView style={styles.screen}>
        <Text style={styles.subhead}>Room Code</Text>
        <RoomCodeCard>
          <Text style={styles.roomCode}>{roomCode}</Text>
        </RoomCodeCard>
        <Text style={styles.subhead}>Players Joined</Text>
        {users.length !== 0 ? (
          <View style={styles.listContainer}>
            <FlatList
              data={users}
              renderItem={({ item }) => <UserCard name={item.name} />}
              keyExtractor={(item) => item.name}
              style={styles.list}
              contentContainerStyle={{ alignItems: 'center' }}
            />
          </View>
        ) : (
          <Text>Is loading...</Text>
        )}
        {users.length > 0 && user.isHost && users.length >= 3 && (
          <NewButton style={styles.button} onPress={handleStartButton}>
            <Text>Begin Round 1</Text>
          </NewButton>
        )}
      </SafeAreaView>
    </View>
  );
}
