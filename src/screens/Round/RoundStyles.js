import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  inputContainer: {
    backgroundColor: 'white',
    width: 300,
    margin: 20,
    borderRadius: 5,
    alignItems: 'flex-end',
  },
  input: {
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    borderRadius: 5,
    padding: 10,
  },
  charsLeft: {
    fontSize: 11,
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
    resizeMode: 'cover',
    height: '100%',
    minWidth: '100%',
  },
});
