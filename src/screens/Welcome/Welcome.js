import React from 'react';
import { View, Text, SafeAreaView, ViewPagerAndroidBase } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

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
        <View style={styles.logoContainer}>
          <Ionicons name="chatbubble" size={200} color="white" />
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
