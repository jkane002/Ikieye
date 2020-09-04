import 'react-native-gesture-handler';
import React, { useState } from "react";
import { Text, StyleSheet, Alert, Dimensions } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { FlatList } from "react-native-gesture-handler";

import AddItem from '../components/AddItem';

const addItem = text => {
    if (!text) {
        Alert.alert(
            'No item entered',
            'Please enter an item when adding to your list',
            [
                {
                    text: 'Understood',
                    style: 'cancel',
                },
            ],
            { cancelable: true },
        );
    } else {
        setItems(prevItems => {
            return [{ id: uuid(), text }, ...prevItems];
        });
    }
};

// Store list items in a database
// Give tips on what they can enter

export default function ListLove({ name }) {
    const [todos, setTodos] = useState([
        { text: 'Soccer', key: '1' },
        { text: 'Helping people', key: '2' },
        { text: 'Technology', key: '3' },
    ]);

    return (
        <ScreenContainer style={styles.container}>
            <AddItem addItem={addItem} />
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
    },
    input: {
        height: 60,
        padding: 8,
        margin: 5,
    }
});