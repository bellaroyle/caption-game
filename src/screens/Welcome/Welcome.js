import { NavigationHelpersContext } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NewButton from "../../components/NewButton";
import styles from "./WelcomeStyles";

export default function Welcome(props) {
  console.log(props);
  const {
    navigation: { navigate },
  } = props;
  return (
    <View style={styles.welcomeScreen}>
      <Text>Welcome to the Caption Game!</Text>
      <View>
        <NewButton onPress={navigate.bind(this, "Host")}>
          <Text>Host</Text>
        </NewButton>
        <NewButton onPress={navigate.bind(this, "Join")}>
          <Text>Join</Text>
        </NewButton>
      </View>
    </View>
  );
}
