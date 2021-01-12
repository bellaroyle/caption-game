import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import MainHeader from './MainHeader';
import NewButton from './NewButton';

export default function Rules() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <NewButton onPress={() => setModalVisible(true)}>Show Rules</NewButton>
      <Modal animationType="slide" visible={modalVisible}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#820263', '#C8005E']}
          style={styles.background}
        />
        <MainHeader text="Rules" />
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.textBox}>
              <Text style={styles.para}>• Choose to host or join a game </Text>
              <Text style={styles.para}>
                • To join a game, you will need the game room code, which will
                be provided to you by the game host
              </Text>
              <Text style={styles.para}>
                • The game host will begin the game by pressing Start Game
              </Text>
              <Text style={styles.para}>
                • Once the game has begun, you will see a picture - write the
                funniest caption to go with the picture (be inventive – your
                friends are voting!) and hit submit
              </Text>
              <Text style={styles.para}>
                • Once everyone has submitted, the host must press the Vote
                button and you will watch the answers appear on the screen
              </Text>
              <Text style={styles.para}>
                • Vote on your favourite caption (You can’t vote for yourself!)
              </Text>
              <Text style={styles.para}>
                • This will continue for the number of rounds the host has
                chosen; when all rounds are complete, see who won the game!
              </Text>
            </View>
            <NewButton onPress={() => setModalVisible(false)}>
              <Text>Close Rules</Text>
            </NewButton>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  textBox: {
    marginBottom: 25,
  },
  para: {
    marginBottom: 10,
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
