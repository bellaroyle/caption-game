import { setStatusBarTranslucent } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getPic } from '../../utils/databaseFuncs';
import { randomNumberGen } from '../../utils/utils';

const array = randomNumberGen();
const round = 1;

export default function Round() {
  const [picRef, setPicRef] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPic(array, round).then((picRef) => {
      setPicRef(picRef);
      setIsLoading(false);
    }, []);
  });

  if (isLoading) {
    return (
      <View>
        <Text>Round 1: Fight!</Text>
        <Text>Image is Loading</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Round 1: Fight!</Text>
        <Image source={{ uri: picRef }} style={styles.pic} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pic: {
    width: 200,
    height: 200,
  },
});
