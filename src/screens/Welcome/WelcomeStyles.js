import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  safeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoContainer: {
    position: 'relative',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTextBox: {
    position: 'absolute',
    top: '25%',
    left: '20%',
  },
  logoTextMain: {
    fontFamily: 'LilitaOne',
    fontSize: 75,
    color: '#2E294E',
  },
  logoTextSub: {
    fontFamily: 'LilitaOne',
    fontSize: 20,
    color: '#D90368',
  },
  btnContainer: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 40,
  },
});
