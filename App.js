import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { UserContext } from './src/Context/UserContext';
import Navigator from './src/navigation/Navigator';

const fetchFonts = () => {
  return Font.loadAsync({
    LilitaOne: require('./assets/fonts/LilitaOne-Regular.ttf'),
    OpenSans: require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [roomCode, setRoomCode] = useState('');
  const [roundLimit, setRoundLimit] = useState(1);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        roomCode,
        setRoomCode,
        roundLimit,
        setRoundLimit,
      }}
    >
      <Navigator />
    </UserContext.Provider>
  );
}
