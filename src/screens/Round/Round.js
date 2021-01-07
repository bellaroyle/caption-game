import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import {
  getPic,
  getPicOrder,
  postAnswerToUser
} from '../../utils/databaseFuncs';
import { UserContext } from '../../Context/UserContext';
import NewButton from '../../components/NewButton';
import styles from './RoundStyles';

const round = 1;

export default function Round(props) {
  const [picRef, setPicRef] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [answer, setAnswer] = useState('');
  const { user, roomCode } = useContext(UserContext);

  const {
    navigation: { navigate }
  } = props;

  useEffect(() => {
    getPicOrder(roomCode).then((picOrder) => {
      console.log(picOrder);
      getPic(picOrder, round).then((picRef) => {
        setPicRef(picRef);
        setIsLoading(false);
      });
    }, []);
  });

  const submitAnswer = () => {
    postAnswerToUser(user.username, roomCode, answer).then(() => {
      navigate('GameWaitingRoom');
    });
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
        <Text>Round 1: Fight!</Text>
        <Image source={{ uri: picRef }} style={styles.pic} />
        <TextInput
          multiline={true}
          onChangeText={(text) => setAnswer(text)}
          value={answer}
          style={styles.input}
        />
        <NewButton onPress={submitAnswer}>
          <Text>Submit answer</Text>
        </NewButton>
      </View>
    );
  }
}
