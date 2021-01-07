import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, DatePickerIOSBase } from 'react-native';
import {
  startGame,
  setAmountOfUsers,
  getAmountOfUsers,
  startAnswers,
} from '../../utils/databaseFuncs';
import UserCard from '../../components/UserCard';
import { firebase } from '../../firebase/config';
import NewButton from '../../components/NewButton';
import { UserContext } from '../../Context/UserContext';

export default function GameWaitingRoom(props) {
  const [users, setUsers] = useState([]);
  const [usersInGame, setUsersInGame] = useState([]);
  const {
    navigation: { navigate },
  } = props;

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
      if (startAnswers) navigate('Answers');
    });
    return () => unsubscribe();
  }, []);

  const handleStartButton = () => {
    startAnswers(roomCode);
  };

  return (
    <View>
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
    </View>
  );
}
