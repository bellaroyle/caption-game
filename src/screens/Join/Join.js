import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import NewButton from '../../components/NewButton';
import { joinRoom } from '../../utils/databaseFuncs';
import styles from './JoinStyles';

export default function Join(props) {
  const {
    navigation: { navigate }
  } = props;

  const [username, setUsername] = useState('');
  const [roomInput, setRoomInput] = useState('');

  const joinGame = () => {
    joinRoom(roomInput, username).then(() => {
      navigate('WaitingRoom', { roomCode: roomInput });
    });
  };

  return (
    <View style={styles.hostScreen}>
      <Text>Please enter your name and room code to join game</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setUsername(text)}
        value={username}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Room code"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setRoomInput(text)}
        value={roomInput}
        autoCapitalize="none"
      />
      <NewButton onPress={joinGame}>
        <Text>Join Game</Text>
      </NewButton>
    </View>
  );
}
