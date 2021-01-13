import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  screen: {
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
  safeView: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '40%',
  },
  logoImg: {
    flex: 1.75,
    width: width * 0.8,
    resizeMode: 'contain',
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
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginBottom: 60,
  },
});
