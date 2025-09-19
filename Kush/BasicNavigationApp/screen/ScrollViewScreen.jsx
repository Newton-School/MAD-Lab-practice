import { ScrollView, Text, StyleSheet, Image, View } from "react-native";

export default function ScrollViewScreen() {
    const items = Array.from({ length: 20 }).map((_, idx) => idx + 1);

    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            {items.map((num) => (
                <View key={num} style={{ marginBottom: 20 }}>
                    <Image
                        source={{
                            uri: "https://t4.ftcdn.net/jpg/02/90/84/47/360_F_290844781_V4hoIL3E291xvY5nEL7NCaWIoCIQxHfI.jpg",
                        }}
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                    />
                    <Text style={styles.item}>
                        Scroll item {num} — Mast scroll karo
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        backgroundColor: "#e6f2ff",
        borderRadius: 8,
        fontSize: 16,
        color: "#003366",
    },
});
