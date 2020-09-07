import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();


const ListItem = ({
    item
}) => {
    return (
        <TouchableHighlight
            style={styles.button}
        // onPress={() => onPress(backgroundColor)}
        >
            <View >
                <Text>
                    {item.text}
                </Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: "stretch",
        backgroundColor: "rgba(255, 255, 255, 0.8)"
    },
    buttonText: {
        fontSize: 30,
        textAlign: "center"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    }
});

export default ListItem;

