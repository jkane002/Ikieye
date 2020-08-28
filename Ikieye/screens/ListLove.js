import 'react-native-gesture-handler';
import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { ScrollView, FlatList } from "react-native-gesture-handler";

export default function ListLove({ name }) {
    const [todos, setTodos] = useState([
        { text: 'Soccer', key: '1' },
        { text: 'Helping people', key: '2' },
        { text: 'Technology', key: '3' },
    ]);

    return (
        <ScreenContainer style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item }) => (<Text>{item.text}</Text>
                )} />
        </ScreenContainer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex"
        // justifyContent: "center",
        // alignItems: "center"
    }
});