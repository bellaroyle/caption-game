import { NavigationHelpersContext } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Welcome(props) {
  console.log(props);
  const {
    navigation: { navigate },
  } = props;
  return (
    <View>
      <Text>Welcome Page</Text>
      <TouchableOpacity onPress={navigate.bind(this, "Host")}>
        <View>
          <Text>Host Game</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
