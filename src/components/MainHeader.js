import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

const width = Dimensions.get('screen').width;

export default function MainHeader({ text }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Header.png')}
        style={styles.headerBG}
      />
      <Text style={styles.headerFont}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  headerFont: {
    position: 'absolute',
    fontFamily: 'LilitaOne',
    fontSize: 30,
    color: 'white',
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerBG: {
    top: -18,
    width: width,
    resizeMode: 'stretch',
  },
});
