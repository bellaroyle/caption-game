import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { firebase } from '../../firebase/config';
import NewButton from '../../components/NewButton';
import { UserContext } from '../../Context/UserContext';
import styles from './VotingStyles';
import UserCard from '../../components/UserCard';
import { addVotes } from '../../utils/databaseFuncs';

export default function Voting(props) {
  const [answers, setAnswers] = useState([]);
  const { user, roomCode } = useContext(UserContext);
  const {
    navigation: { navigate },
  } = props;

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
      navigate('Leaderboard');
    }
  };

  return (
    <View>
      <Text>Click on one of the answers below to give it your vote!</Text>
      <Text>Remember, you can't vote for your own!</Text>
      <FlatList
        data={answers}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <NewButton onPress={() => handleButtonPress(item)}>
            <Text>{item.answer}</Text>
          </NewButton>
        )}
      />
    </View>
  );
}
