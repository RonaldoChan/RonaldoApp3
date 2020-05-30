import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextForm = ({ placeHolder, style, secureTextEntry }) => {
  return (
    <View style={[{ borderWidth: 1, padding: 10, marginBottom: 10 }]}>
      <TextInput
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
      ></TextInput>
    </View>
  );
};

// !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test
export default function App(props) {
  return (
    <View style={styles.container}>
      <TextForm placeHolder={"Correo"}></TextForm>
      <TextForm placeHolder={"Contraseña"} secureTextEntry></TextForm>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={{ padding: 10 }} onPress={() => {}}>
          <Text style={{}}>{"Ingresar"}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text style={{}}>{"REGISTRARSE"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20

    // backgroundColor: "#222f3e"
  },
  vImagen: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  vTexto: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    height: 50,
    width: 230,
    borderRadius: 15,
    borderColor: "#ff6b6b",
    backgroundColor: "#ff6b6b"
  },
  texto: {
    color: "#222f3e",
    fontSize: 25,
    fontWeight: "bold"
  }
});
