import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, Image, Alert } from 'react-native';
import {
  getPic,
  getRound,
  getPicOrder,
  postAnswerToUser,
  toggleGame,
} from '../../utils/databaseFuncs';
import { UserContext } from '../../Context/UserContext';
import NewButton from '../../components/NewButton';
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
      <View>
        <Text>Round 1: Fight!</Text>
        <Text>Image is Loading</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <Text>Round {round}</Text>
        <Image source={{ uri: picRef }} style={styles.pic} />
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
      </View>
    );
  }
}
