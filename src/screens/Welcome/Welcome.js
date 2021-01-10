import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NewButton from '../../components/NewButton';
import styles from './WelcomeStyles';

export default function Welcome(props) {
  const {
    navigation: { replace },
  } = props;

  return (
    <View style={styles.welcomeScreen}>
      <Text>Welcome to the Caption Game!</Text>
      <View style={styles.btnContainer}>
        <NewButton onPress={() => replace('Host')}>
          <Text>Host Game</Text>
        </NewButton>
        <NewButton onPress={() => replace('Join')}>
          <Text>Join Game</Text>
        </NewButton>
      </View>
    </View>
  );
}
