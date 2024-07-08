import React from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Result() {
    const route = useRoute();
    const { peso, altura } = route.params;

    const calcIMC = (peso / (altura * altura)).toFixed(1);
    const pesoMin = (altura * altura * 18.5).toFixed(1);
    const pesoMax = (altura * altura * 24.9).toFixed(1);

    const getMensagem = () => {
        if (calcIMC < 18.5) {
            return 'Você está abaixo do peso!';
        } else if (calcIMC >= 18.5 && calcIMC < 25) {
            return 'Parabéns, você está com peso ideal';
        } else if (calcIMC >= 25 && calcIMC < 30) {
            return 'Cuidado, você está com sobrepeso';
        } else if (calcIMC >= 30 && calcIMC < 35) {
            return 'Você está com obesidade I';
        } else if (calcIMC >= 35 && calcIMC < 40) {
            return 'Você está com obesidade II';
        } else {
            return 'Você está com obesidade III';
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Resultado</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Peso: {peso} kg</Text>
                <Text style={styles.infoText}>Altura: {altura} m</Text>
            </View>

            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>IMC: {calcIMC}</Text>
                <Text style={styles.resultText}>{getMensagem()}</Text>
                <Text style={styles.resultText}>
                    Seu peso ideal está entre {pesoMin} kg e {pesoMax} kg.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    infoContainer: {
        marginBottom: 20,
    },
    infoText: {
        fontSize: 18,
        color: '#666',
    },
    resultContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    resultText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
});
