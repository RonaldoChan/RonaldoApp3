import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default function login(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.boxImagen}
                source={require('../../assets/cara.png')}
            />

            <View style={styles.box}>

                <View name="title" style={styles.title}>
                    <Text style={styles.textTitle}>
                        Iniciar sesion
                   </Text>
                </View >

                <View name="headerName" style={styles.header}>
                    <Text>
                        Usuario
                   </Text>
                </View>

                <View name="boxName" style={styles.boxTexto}>
                    <Text>

                    </Text>
                </View>

                <View name="headerPassword" style={styles.header}>
                    <Text>
                        Contraseña
                   </Text>
                </View>

                <View name="boxPassword" style={styles.boxTexto}>
                    <Text>

                    </Text>
                </View>

                <TouchableOpacity name="headerPassword" style={styles.forgotPass}>
                    <Text style={{ color: 'red' }}>
                        ¿Olvidó su contraseña?
                   </Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <TouchableOpacity
                        name="btnLogin"
                        style={styles.btnLogin}
                        onPress={() => {
                            props.navigation.navigate("Home")
                        }} >

                        <Text style={styles.textLogin} >
                            Ingresar
                        </Text>
                    </TouchableOpacity>
                </View>

                <View name="SingIn" style={styles.registro}>

                    <Text style={{ color: 'blue', fontSize: 16 }}>
                        Si aún no está registrado haga click
                    </Text>

                    <TouchableOpacity >
                        <Text style={{ fontWeight: 'bold', color: 'blue', fontSize: 16 }}>
                            Aquí
                        </Text>
                    </TouchableOpacity>


                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    boxImagen: {
        width: 150,
        height: 150,
        marginBottom: -12,
        padding: 15

    },
    box: {
        margin: 12,
        padding: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#f5f6fa'
    },
    boxTexto: {
        width: 250,
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        marginTop: 2,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 15,
        borderColor: '#2f3640',
    },
    title: {
        alignItems: 'center',
        margin: 15,
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',

    },
    header: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 15,
    },
    btnLogin: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#000000'
    },
    textLogin: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    forgotPass: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 15,
        marginTop: -5,
        marginBottom: 15,
    },
    registro: {
        marginTop: 25,
        marginBottom: 10,
        alignItems: 'center',

    }
});
