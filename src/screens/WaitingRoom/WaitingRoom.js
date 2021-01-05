import React, { useEffect, useState } from "react";
import { View, Text, FlatList, DatePickerIOSBase } from "react-native";
import { getUsersInRoom } from "../../utils/databaseFuncs";
import UserCard from "../../components/UserCard";
import { firebase } from "../../firebase/config";

export default function WaitingRoom(props) {
  const [users, setUsers] = useState([]);

  const roomCode = props.route.params.roomCode;
  console.log(roomCode);

  useEffect(() => {
    getUsersInRoom(roomCode).then((users) => {
      setUsers(users);
    });
  }, [roomCode]);

  // useEffect(() => {
  //   const user = firebase
  //     .firestore()
  //     .collection("rooms")
  //     .doc(roomCode)
  //     .onSnapshot((documentSnapshot) => {
  //       console.log("user data: ", documentSnapshot.data());
  //     });
  //   return () => user();
  // }, [roomCode]);
  console.log(users);
  return (
    <View>
      <Text>You are in room {roomCode}!</Text>
      <Text>Please share this code with your friends</Text>
      {users.length !== 0 ? (
        <FlatList
          data={users}
          renderItem={({ item }) => <UserCard name={item} />}
          keyExtractor={(item) => item}
        />
      ) : (
        <Text>Is loading...</Text>
      )}
    </View>
  );
}
