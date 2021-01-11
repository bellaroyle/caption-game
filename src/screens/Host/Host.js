import React, { useState, useContext } from 'react';
import { Text, TextInput, Alert, SafeAreaView, TouchableWithoutFeedback, Keyboard, } from 'react-native';

import { UserContext } from '../../Context/UserContext';
import { createRoom } from '../../utils/databaseFuncs';

import Rules from '../../components/Rules';
import Picker from '../../components/Picker';
import NewButton from '../../components/NewButton';

import styles from './HostStyles';

export default function Host(props) {
  const [username, setUsername] = useState('');
  const [numRounds, setNumRounds] = useState(1);

  const {
    navigation: { replace },
  } = props;

  const { setUser, setRoomCode, setRoundLimit } = useContext(UserContext);

  const createGame = () => {
    if (username === '') {
      Alert.alert('Please enter your name');
    } else {
      createRoom(username, numRounds).then((roomCode) => {
        setUser({ username, isHost: true });
        setRoundLimit(numRounds);
        setRoomCode(roomCode);
        replace('WaitingRoom');
      });
    }
  };

  const handleNumPicker = (inc) => {
    if (numRounds + inc > 0 && numRounds + inc <= 15)
      setNumRounds(numRounds + inc);
  };

  return (

    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
    <SafeAreaView style={styles.screen}>
      <Text>Please enter your name to host game</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setUsername(text)}
        value={username}
        autoCapitalize="none"
      />

        <Text>Please enter the number of rounds you'd like to play</Text>
        <Picker numRounds={numRounds} onPress={handleNumPicker} />


      <NewButton onPress={createGame}>
        <Text>Create Game</Text>
      </NewButton>
      <NewButton onPress={() => replace('Welcome')}>
        <Text>Back to home</Text>
      </NewButton>
      <Rules />
    </SafeAreaView>
</TouchableWithoutFeedback>
  );
}
