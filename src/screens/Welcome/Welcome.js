import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import NewButton from '../../components/NewButton';
import Rules from '../../components/Rules';
import styles from './WelcomeStyles';

export default function Welcome(props) {
  const {
    navigation: { replace },
  } = props;

  return (
    <SafeAreaView style={styles.screen}>
      <Text>Welcome to the Caption Game!</Text>
      <View style={styles.btnContainer}>
        <NewButton onPress={() => replace('Host')}>
          <Text>Host Game</Text>
        </NewButton>
        <NewButton onPress={() => replace('Join')}>
          <Text>Join Game</Text>
        </NewButton>
        <Rules />
      </View>
    </SafeAreaView>
  );
}
