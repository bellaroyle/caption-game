import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  safeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  roomCode: {
    fontSize: 25,
    marginVertical: 10,
  },
  button: {
    marginBottom: 100,
    alignSelf: 'center',
  },
  answerList: {
    width: '80%',
  },
  round: {
    fontFamily: 'LilitaOne',
    color: 'white',
    fontSize: 25,
    marginBottom: 15,
  },
});
