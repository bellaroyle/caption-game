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
    marginTop: 50,
  },
  btnContainer: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 40,
  },
});
