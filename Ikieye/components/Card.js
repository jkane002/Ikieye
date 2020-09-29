import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function Card(props) {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={props.pressComp}>
            <View style={styles.cardinner}>
                <Text style={styles.title_cards}>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '50%',
        height: '40%',
        padding: 10
    },
    title_cards: {
        fontSize: 28,
        margin: 5,
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    cardinner: {
        flex: 1,
        padding: 6,
        borderRadius: 20,
        backgroundColor: '#ec625f',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

