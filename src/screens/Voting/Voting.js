import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { firebase } from '../../firebase/config';
import NewButton from '../../components/NewButton';
import { UserContext } from '../../Context/UserContext';
import styles from './VotingStyles';
import { getAnswers } from '../../utils/databaseFuncs';
import UserCard from '../../components/UserCard';

export default function Voting(props) {
  const [answers, setAnswers] = useState([]);
  const { user, roomCode } = useContext(UserContext);
  const {
    navigation: { navigate },
  } = props;

  const roomDoc = firebase.firestore().collection("rooms").doc(roomCode);

  useEffect(() => {
    getAnswers(roomCode).then((result) => {
      setAnswers(result);
    });
  }, []);

  return (
    <View>
      <Text>Click on one of the answers below to give it your vote!</Text>
      <Text>Remember, you can't vote for your own!</Text>
      <NewButton onPress={console.log('hello')}>
        <FlatList
          data={answers.answer}
          renderItem={({ item }) => <UserCard name={item} />}
          keyExtractor={(item) => item.name}
          style={styles.list}
        />
      </NewButton>
    </View>
  );
}
