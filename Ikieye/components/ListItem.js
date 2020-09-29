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
const ListItem = ({
    item,
    deleteItem
}) => {
    return (
        <TouchableHighlight
            style={styles.button}
        // onPress={() => onPress(backgroundColor)}
        >
            <View style={styles.row}>
                <Text style={styles.buttonText}>
                    {item.text}
                </Text>
                {/* <Icon
                    name="remove"
                    size={20}
                    color="firebrick"
                    onPress={() => deleteItem(item.id)}
                /> */}
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 0,
        padding: 10,
        borderWidth: .5,
        // borderRadius: 5,
        width: Dimensions.get('window').width,
        alignSelf: "stretch",
        backgroundColor: "rgba(255, 255, 255, 0.8)"
    },
    buttonText: {
        fontSize: 24,
        textAlign: "left"
    },
    row: {
        flexDirection: "row",
        // justifyContent: 'space-evenly',
    }
});

export default ListItem;

