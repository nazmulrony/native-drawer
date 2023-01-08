import { useState } from "react";
import { StyleSheet, View, Animated, Text } from "react-native";
import PrimaryButton from "./PrimaryButton";

const Drawer = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    const visibleDrawer = {
        bottom: 0,
    };
    return (
        <>
            <PrimaryButton onPress={() => setShowDrawer(true)}>
                Open Drawer
            </PrimaryButton>

            <View style={showDrawer ? styles.overlay : null}></View>
            <View
                style={
                    showDrawer
                        ? [styles.drawerContainer, visibleDrawer]
                        : styles.drawerContainer
                }
            >
                <Text style={{ textAlign: "center", fontSize: 30 }}>
                    Drawer Header
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus quas enim, eos cupiditate sequi minus animi expedita
                    sed ut nostrum.
                </Text>
                <PrimaryButton onPress={() => setShowDrawer(false)}>
                    Close Drawer
                </PrimaryButton>
            </View>
        </>
    );
};

export default Drawer;
const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "##rgba(0, 0, 0, 0.7)",
        height: 800,
        width: "100%",
    },
    drawerContainer: {
        padding: 8,
        backgroundColor: "#ffffff",
        position: "absolute",
        bottom: -250,
        left: 0,
        height: 250,
        width: "100%",
    },
});
