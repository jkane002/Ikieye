import 'react-native-gesture-handler';
import React, { useState, useRef } from "react";
import { Text, StyleSheet, Alert, Dimensions } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { FlatList } from "react-native-gesture-handler";
import { generate } from "shortid";

import ListItem from "../components/ListItem";
import EntryForm from '../components/EntryForm';

const useItems = () => {
    const [items, setItems] = useState([]);
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
            const newItem = { id: generate(), text };
            setItems([newItem, ...items]);
        }
    };
    return { items, addItem };
};

// Store list items in a database
// Give tips on what they can enter

export default function ListLove({ name }) {

    const { items, addItem } = useItems();
    return (
        <ScreenContainer style={styles.container}>
            <EntryForm onNewEntry={addItem} />
            {/* <AddItem addItem={addItem} /> */}
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <ListItem
                        item={item}
                    />
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
    }
    // },
    // text: {
    //     fontSize: 18,
    //     padding: 15,
    //     borderRadius: 20,
    //     width: Dimensions.get('window').width,
    //     backgroundColor: '#fff'
    // },
    // input: {
    //     height: 60,
    //     padding: 8,
    //     margin: 5,
    // }
});