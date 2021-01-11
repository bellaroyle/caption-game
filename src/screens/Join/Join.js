import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import NewButton from '../../components/NewButton';
import { joinRoom, getRoundLimit } from '../../utils/databaseFuncs';
import { UserContext } from '../../Context/UserContext';
import styles from './JoinStyles';
import Rules from '../../components/Rules';

export default function Join(props) {
  const {
    navigation: { replace },
  } = props;

  const { setRoundLimit, setUser, setRoomCode } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [roomInput, setRoomInput] = useState('');

  const joinGame = () => {
    joinRoom(roomInput, username)
      .then(() => {
        getRoundLimit(roomInput).then((roundLimit) => {
          setRoundLimit(roundLimit);
          setUser({ username, isHost: false });
          setRoomCode(roomInput);
          replace('WaitingRoom');
        });
      })
      .catch(({ title, message }) => {
        Alert.alert(title, message, {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        });
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
      <NewButton onPress={() => replace('Welcome')}>
        <Text>Back to home</Text>
      </NewButton>
      <Rules />
    </View>
  );
}
