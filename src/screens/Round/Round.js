import React, { useEffect, useState, useContext } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  Alert,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { UserContext } from '../../Context/UserContext';

import {
  getPic,
  getRound,
  getPicOrder,
  postAnswerToUser,
  toggleGame,
} from '../../utils/databaseFuncs';

import NewButton from '../../components/NewButton';
import MainHeader from '../../components/MainHeader';
import styles from './RoundStyles';

export default function Round(props) {
  const [picRef, setPicRef] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [answer, setAnswer] = useState('');
  const [round, setRound] = useState();

  const { user, roomCode } = useContext(UserContext);

  const {
    navigation: { replace },
  } = props;

  useEffect(() => {
    getRound(roomCode).then((round) => {
      setRound(round);
      toggleGame(roomCode);
      getPicOrder(roomCode).then((picOrder) => {
        getPic(picOrder, round).then((picRef) => {
          setPicRef(picRef);
          setIsLoading(false);
        });
      });
    });
  }, []);

  const submitAnswer = () => {
    if (answer === '') Alert.alert('Please enter an answer');
    else {
      postAnswerToUser(user.username, roomCode, answer).then(() => {
        replace('GameWaitingRoom', { picRef });
      });
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.screen}>
        <Text>Round 1: Fight!</Text>
        <Text>Image is Loading</Text>
      </SafeAreaView>
    );
  } else {
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
          <MainHeader text={`Round ${round}`} />
          <SafeAreaView style={styles.screen}>
            <View style={styles.picContainer}>
              <Image source={{ uri: picRef }} style={styles.pic} />
            </View>
            <TextInput
              multiline={true}
              onChangeText={(text) => setAnswer(text)}
              value={answer}
              style={styles.input}
              maxLength={75}
            />
            <NewButton onPress={submitAnswer}>
              <Text>Submit answer</Text>
            </NewButton>
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
