import 'react-native-gesture-handler';
import React, { useState } from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { ScrollView, FlatList } from "react-native-gesture-handler";

// Store list items in a database
// Give tips on what they can enter

export default function ListWorld({ name }) {
    const [todos, setTodos] = useState([
        { text: 'Love', key: '1' },
        { text: 'Volunteers', key: '2' },
        { text: 'Climate change activists', key: '3' },
    ]);

    return (
        <ScreenContainer style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <Text style={styles.text}>
                        {item.text}
                    </Text>
                )} />
        </ScreenContainer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        padding: 15,
        borderRadius: 20,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff'
    }
});