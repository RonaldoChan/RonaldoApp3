import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import AppContext from "./AppContext";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigation from "./src/navigation/AuthNavigation";
import AppNavigation from "./src/navigation/AppNavigation";

const KEY_USER_INFO = "KEY_USER_INFO";

const Stack = createStackNavigator();

const saveUserInfo = user => {
  AsyncStorage.setItem(KEY_USER_INFO, JSON.stringify(user));
};

const getUserInfo = async () => {
  const user = await AsyncStorage.getItem(KEY_USER_INFO);
  return user;
};

export default function App() {
  const [] = React.useState();

  return (
    <AppContext.Provider>
      <AuthNavigation></AuthNavigation>
      {/* <AppNavigation></AppNavigation> */}
    </AppContext.Provider>
  );
}
