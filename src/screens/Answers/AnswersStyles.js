import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  picShadow: {
    width: '90%',
    height: '50%',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    marginTop: 10,
    marginBottom: 22,
  },
  picContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  pic: {
    height: '100%',
    minWidth: '100%',
    resizeMode: 'cover',
  },
});
