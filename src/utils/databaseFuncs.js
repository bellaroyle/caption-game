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
    .set({ host: true, name: username, points: 0 })
    .then(() => {
      return roomCode;
    });
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

const doesRoomExist = (roomCode) => {
  return rooms
    .doc(roomCode)
    .get()
    .then((doc) => {
      return doc.exists;
    });
};

const joinRoom = (roomCode, username) => {

  return doesRoomExist(roomCode).then((roomExists) => {
    return roomExists
      ? getUsersInRoom(roomCode).then((users) => {
          return users.includes(username)
            ? Promise.reject({
                title: 'Username in use',
                message: 'Please choose another username'
              })
            : rooms
                .doc(roomCode)
                .collection('users')
                .doc()
                .set({ host: false, name: username, points: 0 });
        })
      : Promise.reject({
          title: 'Room does not exist',
          message: 'Please enter a valid room code'
        });
  });
};

module.exports = { rooms, createRoom, joinRoom, getUsersInRoom };
