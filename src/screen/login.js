import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export function login() {
  return (
    <View>
      <TextForm placeHolder="Nombre"></TextForm>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});
