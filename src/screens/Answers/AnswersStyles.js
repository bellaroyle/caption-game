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
  picContainer: {
    width: '90%',
    height: '50%',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 22,
    borderColor: 'white',
    borderWidth: 3,
  },
  pic: {
    height: '100%',
    minWidth: '100%',
    resizeMode: 'cover',
  },
});
