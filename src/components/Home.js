import React from "react";
import { Text, TextInput, View, SafeAreaView, Button, StyleSheet } from "react-native";
import { useState } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";

export default function Home() {

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();

    const navigation = useNavigation();
    const route = useRoute();

    const calculaIMC = () => {
        setPeso(peso);
        setAltura(altura);
        navigation.navigate('Result', { peso, altura });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>CALCULADORA DE IMC</Text>
            <View style={styles.center}>
                <View>
                    <Text style={styles.text}>Infórme seu peso:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={peso}
                        onChangeText={(peso) => { setPeso(peso) }}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Infórme sua altura:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={altura}
                        onChangeText={(altura) => { setAltura(altura) }}
                    />
                </View>
                <Button
                    style={styles.button}
                    titleStyle={styles.buttonText}
                    title="calcular IMC"
                    onPress={calculaIMC}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: '#121212',
        padding: 10,
    },
    titulo: {
        color: '#fff',
        backgroundColor: '#0a0',
        fontSize: 25,
        padding: 10,
        borderRadius: 10
    },

    text: {
        color: '#fff', // Cor da letra para o modo claro
    },
    input: {
        backgroundColor: '#262626',
        borderColor: '#fff',
        color: '#fff',
        padding: 10,
    },
    button: {
        backgroundColor: '#3399cc', // Azul claro para o botão
        padding: 15,
        borderRadius: 10, // Bordas arredondadas
    },
    buttonText: {
        color: '#003366', // Azul marinho para o texto do botão
        fontWeight: 'bold',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

