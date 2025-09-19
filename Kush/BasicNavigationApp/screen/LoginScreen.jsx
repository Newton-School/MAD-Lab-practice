import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const chaloLoginKare = async () => {
        if (!email || !password) {
            alert("Arre bhai! Saare field bharna zaroori hai 😅");
            return;
        }

        if (!chaloEmailCheckKare(email)) {
            alert("Ye email thoda sahi nhi lag raha, dobara check kar!");
            return;
        }
        if (password.length < 6) {
            alert("Password chhota hai yaar! Kam se kam 6 ka hona chahiye.");
            return;
        }

        await AsyncStorage.setItem("userEmail", email);
        navigation.navigate("Home");
    };

    function chaloEmailCheckKare(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🙌 Swagat hai! Login kar lo</Text>

            <TextInput
                style={styles.input}
                placeholder="Apna email daaldo yrr..."
                placeholderTextColor="#80bfff"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password bhi daal do..."
                placeholderTextColor="#80bfff"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={chaloLoginKare}>
                <Text style={styles.buttonText}>Login Karo</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f0f6ff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 25,
        textAlign: "center",
        color: "#0055cc",
    },
    input: {
        borderWidth: 1,
        borderColor: "#3399ff",
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: "#e6f2ff",
        color: "#003366",
    },
    button: {
        backgroundColor: "#3399ff",
        padding: 14,
        borderRadius: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
