// Component for Cards
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function Card(props) {

    return (
        // <View style={styles.container}>
        <TouchableOpacity
            style={styles.card}>
            <View style={styles.cardinner}>
                {/* <Text>Count: {count}</Text> */}
                {props.children}
            </View>
        </TouchableOpacity>
        // </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '50%',
        height: '30%',
        padding: 10,
        marginTop: 30,
        marginBottom: 30
    },
    cardinner: {
        flex: 1,
        backgroundColor: '#ea907a',
        alignItems: 'center',
        justifyContent: 'center'
    }
})


