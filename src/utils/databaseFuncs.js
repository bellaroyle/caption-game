import { firebase } from '../firebase/config';
import { randomCodeGen, randomNumberGen } from './utils';
import { Alert } from 'react-native';

const rooms = firebase.firestore().collection('rooms');

const increment = firebase.firestore.FieldValue.increment(1);

const createRoom = (username) => {
  const roomCode = randomCodeGen();
  const picOrder = randomNumberGen();
  const amountOfPlayers = 0;
  return rooms
    .doc(roomCode)
    .set({
      picOrder,
      startGame: false,
      amountOfPlayers,
      round: 1,
      startAnswers: false,
      roundAnswers: [],
    })
    .then(() => {
      return rooms
        .doc(roomCode)
        .collection('users')
        .doc(username)
        .set({
          host: true,
          name: username,
          roundScore: 0,
          overallScore: 0,
          answers: '',
        })
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
      return doc.exists;
    });
};

const joinRoom = (roomCode, username) => {
  console.log(roomCode, 'room code in join room');
  return doesRoomExist(roomCode).then((roomExists) => {
    return roomExists
      ? getUsersInRoom(roomCode).then((users) => {
          return users.includes(username)
            ? Promise.reject({
                title: 'Username in use',
                message: 'Please choose another username',
              })
            : rooms.doc(roomCode).collection('users').doc(username).set({
                host: false,
                name: username,
                roundScore: 0,
                overallScore: 0,
                answers: '',
              });
        })
      : Promise.reject({
          title: 'Room does not exist',
          message: 'Please enter a valid room code',
        });
  });
};

const startGame = (roomCode) => {
  console.log('Starting Game:', roomCode);
  return rooms.doc(roomCode).update({ startGame: true });
};

const startAnswers = (roomCode, roundAnswers) => {
  return rooms
    .doc(roomCode)
    .update({ startGame: false })
    .then(() => {
      return rooms.doc(roomCode).update({ startAnswers: true, roundAnswers });
    });
};

const getRound = (roomCode) => {
  return rooms
    .doc(roomCode)
    .get()
    .then((doc) => {
      return doc.data().round;
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

const postAnswerToUser = (username, roomCode, answer) => {
  return rooms
    .doc(roomCode)
    .collection('users')
    .doc(username)
    .update({ answers: answer })
    .then(() => {
      return rooms
        .doc(roomCode)
        .collection('waiting')
        .doc(username)
        .set({ name: username });
    });
};

const setAmountOfUsers = (roomCode, numberOfUsers) => {
  return rooms.doc(roomCode).update({ amountOfPlayers: numberOfUsers });
};

const getAmountOfUsers = (roomCode) => {
  return rooms
    .doc(roomCode)
    .get()
    .then((doc) => {
      return doc.data().amountOfPlayers;
    });
};

const getScores = (roomCode) => {
  return rooms
    .doc(roomCode)
    .collection('users')
    .orderBy('overallScore', 'desc')
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const { name, overallScore } = doc.data();
        return {
          name,
          overallScore,
        };
      });
    });
};

const getUsers = (roomCode) => {
  return rooms
    .doc(roomCode)
    .collection('users')
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        return doc.data();
      });
    });
};

const getRoundAnswers = (roomCode) => {
  return rooms
    .doc(roomCode)
    .get()
    .then((doc) => {
      return doc.data().roundAnswers;
    });
};

const addVotes = (roomCode, user) => {
  return rooms
    .doc(roomCode)
    .collection('users')
    .doc(user)
    .update({ overallScore: increment, roundScore: increment });
};

const addRound = (roomCode) => {
  return rooms.doc(roomCode).update({ round: increment });
};

module.exports = {
  rooms,
  createRoom,
  joinRoom,
  getUsersInRoom,
  getPic,
  getRound,
  getPicOrder,
  startGame,
  postAnswerToUser,
  setAmountOfUsers,
  getAmountOfUsers,
  getScores,
  startAnswers,
  getRoundAnswers,
  getUsers,
  addVotes,
  addRound,
};
