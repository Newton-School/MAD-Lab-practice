import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
    const [email, setEmail] = useState("");
    const navigation = useNavigation();

    const chaloLogoutKare = async () => {
        await AsyncStorage.removeItem("userEmail");
        setEmail("");
        navigation.navigate("Login");
    };

    useEffect(() => {
        const emailDhoondo = async () => {
            const email = await AsyncStorage.getItem("userEmail");
            setEmail(email || "Storage me nhi tha email bhai 🥲");
        };
        emailDhoondo();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>👋 Arre Welcome Bhai!</Text>
            <Text style={styles.subtitle}>{email}</Text>
            <Text style={styles.tagline}>
                Masti aur Development (MAD) rukni nhi chahiye class me 🔥
            </Text>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: "#007bff" }]}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Scroll View Screen")}
            >
                <Text style={styles.buttonText}>Scroll View Page</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: "#007bff" }]}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Flat View Screen")}
            >
                <Text style={styles.buttonText}>Flat View Page</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={chaloLogoutKare}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f6ff",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#0055cc",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: "#444",
        marginBottom: 8,
        textAlign: "center",
    },
    tagline: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "red",
        padding: 12,
        borderRadius: 12,
        alignItems: "center",
        margin: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1,
    },
});
