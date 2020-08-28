import React from "react";
import { Alert, View, Text, TouchableOpacity } from "react-native";

import { styles } from '../styles/styles';

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


