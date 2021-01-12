import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    width: 300,
    height: '65%',
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#820263',
    shadowColor: '#2E294E',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.3,
    elevation: 1,
  },
  list: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  roomCode: {
    fontSize: 30,
    marginVertical: 10,
    fontFamily: 'LilitaOne',
    color: '#2E294E',
  },
  usernameContainer: {
    minWidth: '80%',
    alignItems: 'center',
    borderBottomColor: '#2E294E',
    borderBottomWidth: 1,
    padding: '2%',
  },
  usernames: {
    fontSize: 22,
    marginVertical: 10,
    fontFamily: 'LilitaOne',
    color: '#2E294E',
    textAlign: 'center',
    margin: 60,
  },
  button: {
    marginBottom: 100,
  },
  subhead: {
    fontFamily: 'LilitaOne',
    fontSize: 20,
    color: 'white',
    marginVertical: 10,
  },
});
