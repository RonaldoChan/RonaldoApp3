import React from "react";
import Home from "../screen/home";
import Login from "../screen/login";
import Registro from "../screen/registro";
import Contraseña from "../screen/contraseña";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ header: () => null }}
        />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Contraseña" component={Contraseña} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
