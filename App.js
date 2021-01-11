import React, { useState } from 'react';

import { UserContext } from './src/Context/UserContext';
import Navigator from './src/navigation/Navigator';

export default function App() {
  const [user, setUser] = useState(null);
  const [roomCode, setRoomCode] = useState('');
  const [roundLimit, setRoundLimit] = useState(1);

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
