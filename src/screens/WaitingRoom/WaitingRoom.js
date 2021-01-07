import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, DatePickerIOSBase } from 'react-native';
import { startGame, setAmountOfUsers } from '../../utils/databaseFuncs';
import UserCard from '../../components/UserCard';
import { firebase } from '../../firebase/config';
import NewButton from '../../components/NewButton';
import { UserContext } from '../../Context/UserContext';

export default function WaitingRoom(props) {
  const [users, setUsers] = useState([]);
  const {
    navigation: { navigate },
  } = props;

  const { user, setUsersInGame } = useContext(UserContext);

  const roomCode = props.route.params.roomCode;
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
      if (startGame) navigate('Round', { roomCode });
    });
    return () => unsubscribe();
  }, []);

  const handleStartButton = () => {
    console.log('Start game in waiting room:', roomCode);
    startGame(roomCode);
    setAmountOfUsers(roomCode, users.length);
  };

  return (
    <View>
      <Text>You are in room {roomCode}!</Text>
      <Text>Please share this code with your friends</Text>
      {users.length !== 0 ? (
        <FlatList
          data={users}
          renderItem={({ item }) => <UserCard name={item.name} />}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <Text>Is loading...</Text>
      )}
      {users.length > 0 && user.isHost && (
        <NewButton onPress={handleStartButton}>
          <Text>Begin Round 1</Text>
        </NewButton>
      )}
    </View>
  );
}
