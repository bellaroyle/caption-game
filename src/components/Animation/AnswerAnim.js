import React, { useEffect, useState } from 'react';
import { Text, Animated, Easing, StyleSheet } from 'react-native';

export default AnswerAnim = ({ answers, animComplete }) => {
  const moveAnim = new Animated.ValueXY({ x: 500, y: 0 });

  const [answerIndex, setAnswerIndex] = useState(0);

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
    ]).start(() => {
      if (answerIndex < answers.length - 1) setAnswerIndex(answerIndex + 1);
      else animComplete();
    });
  }, [moveAnim, answerIndex]);

  return (
    <Animated.View style={[styles.textBox, moveAnim.getLayout()]}>
      <Text style={styles.text}>{answers[answerIndex].answer}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 280,
    padding: 15,
    marginVertical: 20,
    shadowColor: '#2E294E',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.3,
  },
  text: {
    fontSize: 20,
    color: '#2E294E',
  },
});
