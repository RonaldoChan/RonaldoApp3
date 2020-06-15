import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  AsyncStorage
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const KEY_USER = "KEY_USER";
const TextForm = ({ placeHolder, onChangeText }) => {
  return (
    <View style={[{ borderWidth: 1, padding: 10, marginBottom: 10 }]}>
      <TextInput
        placeholder={placeHolder}
        onChangeText={text => {
          if (onChangeText) {
            onChangeText(text);
          }
        }}
      ></TextInput>
    </View>
  );
};

export default function Register() {
  let data = {};

  const saveUser = async user => {
    const users = await AsyncStorage.getItem(KEY_USER);
    console.log("users", users);
    if (users) {
      const userArray = JSON.parse(users);
      if (Array.isArray(userArray)) {
        const filter = userArray.find(
          item => item !== null && item.name === user.name
        );
        if (filter) {
          alert("Usuario existente");
        } else {
          userArray.push(user);
          AsyncStorage.setItem(KEY_USER, JSON.stringify(userArray));
          alert("Usuario registrado");
        }
      }
    } else {
      const arrayUser = [];
      arrayUser.push(user);
      AsyncStorage.setItem(KEY_USER, JSON.stringify(arrayUser));
    }
  };

  return (
    <View style={styles.container}>
      <TextForm
        placeHolder="Nombre"
        onChangeText={text => {
          data.name = text;
        }}
      ></TextForm>
      <TextForm
        placeHolder="Apellido"
        onChangeText={text => {
          data.lastname = text;
        }}
      ></TextForm>
      <TouchableOpacity
        onPress={() => {
          saveUser(data);
        }}
      >
        <Text>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20
  }
});
