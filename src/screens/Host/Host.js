import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { UserContext } from '../../Context/UserContext';
import { createRoom } from '../../utils/databaseFuncs';

import MainHeader from '../../components/MainHeader';
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
      <View style={styles.screen}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#820263', '#C8005E']}
          style={styles.background}
        />
        <MainHeader text="Host a game" />
        <SafeAreaView style={styles.screen}>
          <View style={styles.nameContainer}>
            <Text style={styles.subhead}>Your name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your name"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setUsername(text)}
              value={username}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.subhead}>Rounds</Text>
            <Picker
              style={styles.picker}
              numRounds={numRounds}
              onPress={handleNumPicker}
            />
          </View>

          <View style={styles.btnContainer}>
            <NewButton onPress={createGame}>
              <Text>Create Game</Text>
            </NewButton>
            <NewButton onPress={() => replace('Welcome')}>
              <Text>Back to home</Text>
            </NewButton>
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
