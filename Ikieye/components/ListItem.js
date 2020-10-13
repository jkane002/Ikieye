import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions
} from "react-native";

// Generates a single list item with text
const ListItem = ({ item }) => {
    return (
        <View style={styles.entryItem}>
            <Text style={styles.entryItemText}>
                {item.text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    entryItem: {
        flexDirection: "row",
        marginBottom: 0,
        padding: 10,
        borderWidth: .5,
        width: Dimensions.get('window').width,
        alignSelf: "stretch",
        backgroundColor: "#fff"
    },
    entryItemText: {
        fontSize: 24,
        textAlign: "left"
    }
});

export default ListItem;

