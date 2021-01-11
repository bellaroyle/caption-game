import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NewButton from '../../components/NewButton';
import styles from './WelcomeStyles';
import Rules from '../../components/Rules';

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
