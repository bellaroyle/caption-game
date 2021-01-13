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
  input: {
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  picContainer: {
    width: '90%',
    height: '50%',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 22,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  pic: {
    resizeMode: 'cover',
    height: '100%',
    minWidth: '100%',
  },
});
