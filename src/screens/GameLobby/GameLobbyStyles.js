import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

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
  subBox: {
    position: 'absolute',
    top: -5,
    backgroundColor: '#2E294E',
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: 'center',
    zIndex: 20,
  },
  subhead: {
    fontSize: 14,
    fontFamily: 'OpenSansBold',
    color: 'white',
    marginVertical: 9,
    textTransform: 'uppercase',
  },
  room: {
    height: 100,
    position: 'relative',
    alignItems: 'center',
    marginVertical: 15,
  },
  roomCode: {
    fontSize: 30,
    fontFamily: 'LilitaOne',
    color: '#2E294E',
  },
  roomBox: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    paddingTop: 28,
    margin: 10,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2E294E',
    shadowColor: '#2E294E',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.3,
    elevation: 1,
  },
  players: {
    height: height * 0.47,
    alignItems: 'center',
    marginVertical: 15,
  },
  listContainer: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 300,
    height: '100%',
    marginVertical: 10,
    paddingTop: 21,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2E294E',
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
  button: {
    marginTop: 15,
    marginBottom: 40,
  },
});