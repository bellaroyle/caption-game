import React, { useEffect, useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { UserContext } from '../../Context/UserContext';
import {
  getScores,
  getUsers,
  deleteUserFromRoom,
  deleteRoom,
} from '../../utils/databaseFuncs';
import WinnersCard from '../../components/WinnersCard';
import RunnersUpCard from '../../components/RunnersUpCard';
import NewButton from '../../components/NewButton';

export default function Winners(props) {
  const [winners, setWinners] = useState([]);
  const { user, roomCode } = useContext(UserContext);

  const {
    navigation: { replace },
  } = props;

  useEffect(() => {
    getScores(roomCode).then((winners) => {
      setWinners(winners);
    });
  }, []);

  const renderListItem = (itemData) => {
    if (itemData.index === 0) {
      return <WinnersCard data={itemData.item} />;
    } else if (itemData.index === 1 || itemData.index === 2) {
      return <RunnersUpCard data={itemData.item} />;
    }
  };

  const handleGoHome = () => {
    deleteUserFromRoom(user.username, roomCode).then(() => {
      getUsers(roomCode).then((users) => {
        if (users.length === 0) {
          deleteRoom(roomCode);
        }
      });
    });
    // deleteRoom(roomCode);
    replace('Welcome');
  };

  return (
    <View>
      <FlatList
        data={winners}
        keyExtractor={(item) => item.name}
        renderItem={renderListItem}
      />
      <NewButton onPress={handleGoHome}>
        <Text>Go back to home page</Text>
      </NewButton>
    </View>
  );
}
