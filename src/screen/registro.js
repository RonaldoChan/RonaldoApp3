import React from "react";
import { useLinkProps } from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
    ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function App(props) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Registro</Text>
                </View>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>NickName</Text>
                </View>

                <TextInput style={styles.boxTexto}></TextInput>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>Nombre</Text>
                </View>

                <TextInput style={styles.boxTexto}></TextInput>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>Apellido</Text>
                </View>

                <TextInput style={styles.boxTexto}></TextInput>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>Correo</Text>
                </View>
                <TextInput style={styles.boxTexto}></TextInput>

                <View style={styles.btnRegistro}>
                    <Text style={styles.textRegistro}>Registrarse</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        flex: 1,
        borderWidth: 3,
        padding: 15,
        borderRadius: 15,
    },
    title: {
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        marginLeft: 3,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 15,
    },
    textHeader: {
        fontWeight: "bold",
    },
    textTitle: {
        margin: 15,
        fontSize: 25,
    },
    boxTexto: {
        height: 35,
        width: 300,
        borderRadius: 7,
        borderWidth: 1,
    },
    btnRegistro: {
        alignItems: "center",
        borderWidth: 1,
        height: 25,
        width: 90,
    },
});
