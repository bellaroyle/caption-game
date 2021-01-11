import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Answers from '../screens/Answers/Answers';
import Host from '../screens/Host/Host';
import Join from '../screens/Join/Join';
import GameWaitingRoom from '../screens/GameWaitingRoom/GameWaitingRoom';
import Leaderboard from '../screens/Leaderboard/Leaderboard';
import Round from '../screens/Round/Round';
import Voting from '../screens/Voting/Voting';
import WaitingRoom from '../screens/WaitingRoom/WaitingRoom';
import Welcome from '../screens/Welcome/Welcome';
import Winners from '../screens/Winners/Winners';

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
    <GameStack.Navigator screenOptions={{ headerShown: false }}>
      <GameStack.Screen name="Welcome" component={Welcome} />
      <GameStack.Screen name="Host" component={Host} />
      <GameStack.Screen name="Join" component={Join} />
      <GameStack.Screen name="WaitingRoom" component={WaitingRoom} />
      <GameStack.Screen name="Round" component={Round} />
      <GameStack.Screen name="GameWaitingRoom" component={GameWaitingRoom} />
      <GameStack.Screen name="Answers" component={Answers} />
      <GameStack.Screen name="Voting" component={Voting} />
      <GameStack.Screen name="Leaderboard" component={Leaderboard} />
      <GameStack.Screen name="Winners" component={Winners} />
    </GameStack.Navigator>
  );
};
