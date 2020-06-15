import React from "react";
import { useLinkProps } from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function App(props) {
    return (
        <View>
            <Text>Contraseña</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
});
