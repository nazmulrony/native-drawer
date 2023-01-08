import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Drawer from "../components/Drawer";
import ProfileInfo from "../components/ProfileInfo";

const Profile = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.topContainer}>
                <View style={styles.topTextContainer}>
                    <Text style={{ color: "#fff" }}>Settings</Text>
                    <Text style={{ color: "#fff", fontSize: 30 }}>Profile</Text>
                    <Text style={{ color: "#fff" }}>Logout</Text>
                </View>
            </View>
            <ProfileInfo />
            <View style={styles.rectangle}></View>
            <Drawer />
        </View>
    );
};

export default Profile;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        position: "relative",
    },
    topContainer: {
        flexDirection: "row",
        height: 245,
        backgroundColor: "#5DB075",
        padding: 16,
        paddingTop: 40,
    },
    topTextContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        height: 45,
    },
    profileContainer: {},
    rectangle: {
        margin: 16,
        height: 200,
        width: 360,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
    },
});
