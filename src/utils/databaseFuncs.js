import { firebase } from '../firebase/config';
import { randomCodeGen, randomNumberGen } from './utils';
import { Alert } from 'react-native';

const rooms = firebase.firestore().collection('rooms');

const createRoom = (username) => {
  const roomCode = randomCodeGen();
  const picOrder = randomNumberGen();
  return rooms
    .doc(roomCode)
    .set({ picOrder })
    .then(() => {
      return rooms
        .doc(roomCode)
        .collection('users')
        .doc()
        .set({ host: true, name: username, points: 0 })
        .then(() => {
          return roomCode;
        });
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
  console.log(roomCode, 'room code ');
  return rooms
    .doc(roomCode)
    .get()
    .then((doc) => {
      // console.log(doc);
      console.log(doc.exists);
      return doc.exists;
    });
};

const joinRoom = (roomCode, username) => {
  console.log(roomCode, 'room code in join room');
  return doesRoomExist(roomCode).then((roomExists) => {
    console.log('does room exist', roomExists);
    return roomExists
      ? getUsersInRoom(roomCode).then((users) => {
          return users.includes(username)
            ? Promise.reject({
                title: 'Username in use',
                message: 'Please choose another username',
              })
            : rooms
                .doc(roomCode)
                .collection('users')
                .doc()
                .set({ host: false, name: username, points: 0 });
        })
      : Promise.reject({
          title: 'Room does not exist',
          message: 'Please enter a valid room code',
        });
  });
};

const getPic = (array, round) => {
  let num = array[round - 1];
  return firebase.storage().ref().child(`/${num}.jpg`).getDownloadURL();
};

const getPicOrder = (roomCode) => {
  return rooms
    .doc(roomCode)
    .get()
    .then((doc) => {
      return doc.data().picOrder;
    });
};

module.exports = {
  rooms,
  createRoom,
  joinRoom,
  getUsersInRoom,
  getPic,
  getPicOrder,
};
