import React from 'react';
import { View, Text, SafeAreaView, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Svg, Path } from 'react-native-svg';

import NewButton from '../../components/NewButton';
import Rules from '../../components/Rules';
import styles from './WelcomeStyles';

export default function Welcome(props) {
  const {
    navigation: { replace },
  } = props;

  return (
    <View style={styles.screen}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#820263', '#C8005E']}
        style={styles.background}
      />
      <SafeAreaView style={styles.safeView}>
        <View styles={styles.logoContainer}>
          <Image source={require('../../assets/images/Logo.png')} />
        </View>

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
    </View>
  );
}
