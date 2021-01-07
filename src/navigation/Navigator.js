import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome/Welcome';
import Host from '../screens/Host/Host';
import Join from '../screens/Join/Join';
import WaitingRoom from '../screens/WaitingRoom/WaitingRoom';
import Round from '../screens/Round/Round';
import GameWaitingRoom from '../screens/GameWaitingRoom/GameWaitingRoom';
import Answers from '../screens/Answers/Answers';

export default function Navigator() {
  return (
    <NavigationContainer>
      <GameStackNavigator />
    </NavigationContainer>
  );
}

const GameStack = createStackNavigator();

const GameStackNavigator = () => {
  return (
    <GameStack.Navigator>
      <GameStack.Screen name="Welcome" component={Welcome} />
      <GameStack.Screen name="Host" component={Host} />
      <GameStack.Screen name="Join" component={Join} />
      <GameStack.Screen name="WaitingRoom" component={WaitingRoom} />
      <GameStack.Screen name="Round" component={Round} />
      <GameStack.Screen name="GameWaitingRoom" component={GameWaitingRoom} />
      <GameStack.Screen name="Answers" component={Answers} />
    </GameStack.Navigator>
  );
};
