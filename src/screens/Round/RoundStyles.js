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
  inputContainer: {
    backgroundColor: 'white',
    width: 310,
    margin: 12,
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#820263',
    alignItems: 'flex-end',
  },
  input: {
    width: 300,
    height: 65,
    padding: 10,
    paddingLeft: 15,
    fontFamily: 'OpenSans',
    fontSize: 14.5,
  },
  charsLeft: {
    fontFamily: 'OpenSans',
    fontSize: 11,
    marginTop: 5,
    marginRight: 7,
    marginBottom: 4,
    opacity: 0.75,
  },
});
