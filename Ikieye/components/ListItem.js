import React from "react";
import { Dimensions } from "react-native";
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();

// Generates a single list with text
const ListItem = ({ item }) => {
    return (
        <View style={styles.button}>
            <Text style={styles.buttonText}>
                {item.text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        marginBottom: 0,
        padding: 10,
        borderWidth: .5,
        width: Dimensions.get('window').width,
        alignSelf: "stretch",
        backgroundColor: "#fff"
    },
    buttonText: {
        fontSize: 24,
        textAlign: "left"
    }
});

export default ListItem;

