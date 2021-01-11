import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import NewButton from './NewButton';

export default function Rules() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <NewButton onPress={() => setModalVisible(true)}>Show Rules</NewButton>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Rules</Text>
            <Text>• Choose to host or join a game </Text>
            <Text>
              • To join a game, you will need the game room code, which will be
              provided to you by the game host
            </Text>
            <Text>
              • The game host will begin the game by pressing Start Game
            </Text>
            <Text>
              • Once the game has begun, you will see a picture - write the
              funniest caption to go with the picture (be inventive – your
              friends are voting!) and hit submit
            </Text>
            <Text>
              • Once everyone has submitted, the host must press the Vote button
              and you will watch the answers appear on the screen
            </Text>
            <Text>
              • Vote on your favourite caption (You can’t vote for yourself!)
            </Text>
            <Text>
              • This will continue for the number of rounds the host has chosen;
              when all rounds are complete, see who won the game!
            </Text>
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
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
