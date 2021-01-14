import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  introContainer: {
    alignItems: 'center',
    marginVertical: 10,
    width: '90%',
  },
  introText: {
    fontFamily: 'LilitaOne',
    color: 'white',
    fontSize: 19,
    marginBottom: 5,
  },
  answerList: {
    marginTop: 20,
    width: '80%',
    marginBottom: 10,
  },
});
