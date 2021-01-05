import React, { useEffect, useState } from "react";
import { View, Text, FlatList, DatePickerIOSBase } from "react-native";
import { getUsersInRoom } from "../../utils/databaseFuncs";
import UserCard from "../../components/UserCard";
import { firebase } from "../../firebase/config";

export default function WaitingRoom(props) {
  const [users, setUsers] = useState([]);

  const roomCode = props.route.params.roomCode;
  const roomDoc = firebase.firestore().collection("rooms").doc(roomCode);

  useEffect(() => {
    const unsubscribe = roomDoc.collection("users").onSnapshot((snap) => {
      const data = snap.docs.map((doc) => doc.data());
      setUsers(data);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View>
      <Text>You are in room {roomCode}!</Text>
      <Text>Please share this code with your friends</Text>
      {users.length !== 0 ? (
        <FlatList
          data={users}
          renderItem={({ item }) => <UserCard name={item.name} />}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <Text>Is loading...</Text>
      )}
    </View>
  );
}
