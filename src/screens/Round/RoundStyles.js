import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center'
    // justifyContent: 'center'
  },
  input: {
    backgroundColor: '#fff',
    width: 200,
    height: 50,
    borderRadius: 5,
    padding: 10,
    margin: 10
  },
  pic: {
    width: '90%',
    minHeight: '30%',
    maxHeight: '50%',
    resizeMode: 'contain'
  }
});
