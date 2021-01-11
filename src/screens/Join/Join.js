import React, { useState, useContext } from 'react';
import { Text, TextInput, Alert, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { joinRoom, getRoundLimit } from '../../utils/databaseFuncs';
import { UserContext } from '../../Context/UserContext';

import NewButton from '../../components/NewButton';
import Rules from '../../components/Rules';

import styles from './JoinStyles';

export default function Join(props) {
  const {
    navigation: { replace },
  } = props;

  const { setRoundLimit, setUser, setRoomCode } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [roomInput, setRoomInput] = useState('');

  const joinGame = () => {
    if (username === '' && roomInput === '') {
      Alert.alert('Please enter your name and room code');
    } else if (roomInput === '') {
      Alert.alert('Please enter a room code');
    } else if (username === '') {
      Alert.alert('Please enter your name');
    } else {
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
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
    <SafeAreaView style={styles.screen}>
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
    </SafeAreaView>
</TouchableWithoutFeedback>
  );
}
