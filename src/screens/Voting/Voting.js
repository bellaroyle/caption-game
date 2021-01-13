import React, { useEffect, useState, useContext } from 'react';
import { Text, FlatList, Alert, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { firebase } from '../../firebase/config';
import { UserContext } from '../../Context/UserContext';

import { addVotes } from '../../utils/databaseFuncs';

import MainHeader from '../../components/MainHeader';
import AnswerButton from '../../components/AnswerButton';
import styles from './VotingStyles';

export default function Voting(props) {
  const [answers, setAnswers] = useState([]);

  const { user, roomCode } = useContext(UserContext);

  const {
    navigation: { replace },
  } = props;
  const { round } = props.route.params;

  const roomDoc = firebase.firestore().collection('rooms').doc(roomCode);

  useEffect(() => {
    setAnswers(props.route.params.answers);
  });

  const handleButtonPress = (item) => {
    const username = item.name;
    if (user.username === username) {
      Alert.alert('You cant pick your own answer', 'Please choose another', {
        text: 'Ok',
        onPress: () => console.log('Ok Pressed'),
      });
    } else {
      addVotes(roomCode, username);
      replace('Leaderboard', { isRound: true, isOverall: false, round });
    }
  };

  return (
    <View style={styles.screen}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#820263', '#C8005E']}
        style={styles.background}
      />
      <MainHeader text="Vote!" />
      <SafeAreaView style={styles.screen}>
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            Click one of the answers to give it your vote.
          </Text>
          <Text style={styles.introText}>
            Remember, you can't vote for yourself!
          </Text>
        </View>
        <FlatList
          data={answers}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <AnswerButton onPress={() => handleButtonPress(item)}>
              <Text>{item.answer}</Text>
            </AnswerButton>
          )}
          style={styles.answerList}
        />
      </SafeAreaView>
    </View>
  );
}
