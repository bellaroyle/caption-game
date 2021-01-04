import { firebase } from '../firebase/config';
import { randomCodeGen } from './utils';

const rooms = firebase.firestore().collection('rooms');

const createRoom = (username) => {
  const roomCode = randomCodeGen();
  return rooms
    .doc(roomCode)
    .collection('users')
    .doc()
    .set({ host: true, name: username, points: 0 });
};

module.exports = { rooms, createRoom };
