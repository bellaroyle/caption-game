import { firebase } from '../firebase/config';
import { randomCodeGen } from './utils';
import { Alert } from 'react-native';

const rooms = firebase.firestore().collection('rooms');

const createRoom = (username) => {
  const roomCode = randomCodeGen();
  return rooms
    .doc(roomCode)
    .collection('users')
    .doc()
    .set({ host: true, name: username, points: 0 });
};

const getUsersInRoom = (roomCode) => {
  return rooms
    .doc(roomCode)
    .collection('users')
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        console.log(doc.data().name);
        return doc.data().name;
      });
    });
};

const joinRoom = (roomCode, username) => {
  return getUsersInRoom(roomCode).then((users) => {
    return users.includes(username)
      ? Alert.alert('Username in use', 'Please change your name!', {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        })
      : rooms
          .doc(roomCode)
          .collection('users')
          .doc()
          .set({ host: false, name: username, points: 0 });
  });
};

module.exports = { rooms, createRoom, joinRoom, getUsersInRoom };
