import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NewButton from '../../components/NewButton';
import { createRoom } from '../../utils/databaseFuncs';
import styles from './HostStyles';

export default function Host(props) {
  const [hostName, setHostName] = useState('');
  const {
    navigation: { navigate },
  } = props;

  const createGame = () => {
    createRoom(hostName).then((roomCode) => {
      navigate('WaitingRoom', { roomCode: roomCode });
    });
  };

  return (
    <View style={styles.hostScreen}>
      <Text>Please enter your name to host game</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setHostName(text)}
        value={hostName}
        autoCapitalize="none"
      />
      <NewButton onPress={createGame}>
        <Text>Create Game</Text>
      </NewButton>
    </View>
  );
}
