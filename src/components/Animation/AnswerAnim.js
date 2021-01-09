import React, { useEffect, useState } from 'react';
import { Text, Animated, Easing, View, StyleSheet } from 'react-native';

export default AnswerAnim = ({ answer }) => {
  const moveAnim = new Animated.ValueXY({ x: 500, y: 0 });

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        toValue: { x: 0, y: 0 },
        duration: 750,
        easing: Easing.elastic(1),
        useNativeDriver: false,
      }),
      Animated.delay(3000),
      Animated.timing(moveAnim, {
        toValue: { x: -500, y: 0 },
        duration: 750,
        easing: Easing.elastic(1),
        useNativeDriver: false,
      }),
    ]).start();
  }, [moveAnim]);

  return (
    <Animated.View style={[styles.textBox, moveAnim.getLayout()]}>
      <Text style={styles.text}>{answer}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginVertical: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
  },
});
