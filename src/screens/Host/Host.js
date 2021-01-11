import React, { useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import NewButton from '../../components/NewButton';
import { UserContext } from '../../Context/UserContext';
import { createRoom } from '../../utils/databaseFuncs';
import styles from './HostStyles';
import Rules from '../../components/Rules';

export default function Host(props) {
  const [username, setUsername] = useState('');
  const [numRounds, setNumRounds] = useState(1);
  const {
    navigation: { replace },
  } = props;

  const { setUser, setRoomCode, setRoundLimit } = useContext(UserContext);

  const createGame = () => {
    createRoom(username, numRounds).then((roomCode) => {
      setUser({ username, isHost: true });
      setRoundLimit(numRounds);
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
      <Picker
        selectedValue={numRounds}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue) => {
          setNumRounds(itemValue);
        }}
      >
        <Picker.Item label="1" value={1} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="5" value={5} />
        <Picker.Item label="7" value={7} />
        <Picker.Item label="10" value={10} />
      </Picker>
      <NewButton onPress={createGame}>
        <Text>Create Game</Text>
      </NewButton>
      <Rules />
    </View>
  );
}
