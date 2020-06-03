import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useLinkProps } from "@react-navigation/native";


export default function App(props) {
    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => { props.navigation.navigate("Login") }}
                style={styles.vTexto}>
                <Text style={styles.texto}>
                    INGRESAR
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.vTexto}>
                <Text style={styles.texto}>
                    REGISTRARSE
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222f3e'
    },
    vImagen: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,


    },
    vTexto: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        height: 50,
        width: 230,
        borderRadius: 15,
        borderColor: '#ff6b6b',
        backgroundColor: '#ff6b6b',

    },
    texto: {
        color: '#222f3e',
        fontSize: 25,
        fontWeight: 'bold'
    }
});
