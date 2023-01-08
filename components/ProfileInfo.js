import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProfileInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/images/Ellipse6.png")} />
            </View>
            <View>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "bold",
                    }}
                >
                    Victoria Robertson
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "bold",
                    }}
                >
                    A mantra goes here
                </Text>
            </View>
            <View style={styles.post}>
                <Text
                    style={{ textAlign: "center", flex: 1, fontWeight: "bold" }}
                >
                    Posts
                </Text>
                <Text style={styles.photos}>Photos</Text>
            </View>
        </View>
    );
};

export default ProfileInfo;
const styles = StyleSheet.create({
    container: {
        marginTop: -130,
        paddingHorizontal: 16,
    },
    imageContainer: {
        alignItems: "center",
    },
    post: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 24,
        marginVertical: 16,
        overflow: "hidden",
        marginHorizontal: 24,
    },
    photos: {
        padding: 12,
        width: "50%",
        borderRadius: 24,
        textAlign: "center",
        backgroundColor: "#ffffff",
        color: "#5DB075",
        fontWeight: "bold",
    },
});
