import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { Svg } from 'expo';

const WIDTH = Dimensions.get('screen').width;

export default function MainHeader({ text }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Svg height={300} width={WIDTH}>
        <Svg.Path
          d="M375 0H3.93717e-05C-0.000138087 42.3566 0.000358314 64.4008 3.80488e-05 143.507C161.596 170.833 317.332 138.528 375 117.654V0Z"
          fill="blue"
          stroke="blue"
        />
      </Svg> */}
      <Text style={styles.headerFont}>{text}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#820263',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    alignItems: 'center',
  },
  headerFont: {
    fontFamily: 'LilitaOne',
    fontSize: 35,
    color: 'white',
    paddingBottom: 20,
  },
});
