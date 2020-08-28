import 'react-native-gesture-handler';
import React from "react";
import { Text, StyleSheet } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { ScrollView } from "react-native-gesture-handler";

export default function ListLove({ name }) {
    return (
        <ScreenContainer style={styles.container}>
            <ScrollView>
                <Text>List Love Screen</Text>
                {name && <Text>{name}</Text>}
                <Text>HEllo</Text>
            </ScrollView>
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