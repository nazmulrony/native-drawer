import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Profile from "./screen/Profile";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Profile />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
