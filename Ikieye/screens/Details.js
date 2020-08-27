import React from "react";
import { Text, StyleSheet } from "react-native";
import { ScreenContainer } from "react-native-screens";

export default function Details({ name }) {
    return (
        <ScreenContainer style={styles.container}>
            <Text>Details Screen</Text>
            {name && <Text>{name}</Text>}
        </ScreenContainer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});