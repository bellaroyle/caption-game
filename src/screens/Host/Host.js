import React, { useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import NewButton from '../../components/NewButton';
import { UserContext } from '../../Context/UserContext';
import { createRoom } from '../../utils/databaseFuncs';
import styles from './HostStyles';
import Rules from '../../components/Rules';

export default function Host(props) {
  const [username, setUsername] = useState('');
  const {
    navigation: { replace },
  } = props;

  const { user, setUser, setRoomCode } = useContext(UserContext);

  const createGame = () => {
    createRoom(username, 5).then((roomCode) => {
      setUser({ username, isHost: true });
      setRoomCode(roomCode);
      replace('WaitingRoom');
    });
  };

  return (
    <View style={styles.hostScreen}>
      <Text>Please enter your name to host game</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setUsername(text)}
        value={username}
        autoCapitalize="none"
      />
      <NewButton onPress={createGame}>
        <Text>Create Game</Text>
      </NewButton>
      <Rules />
    </View>
  );
}
