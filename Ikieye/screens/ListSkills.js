import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { FlatList } from "react-native-gesture-handler";

import ListItem from "../components/ListItem";
import EntryForm from '../components/EntryForm';

import { useItems } from "../hooks";

// Store list items in a database
// Give tips on what they can enter

export default function ListSkills({ name }) {
    const { items, addItem } = useItems();
    return (
        <ScreenContainer style={styles.container}>
            <EntryForm onNewEntry={addItem} />
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
    },
    text: {
        fontSize: 18,
        padding: 15,
        borderRadius: 20,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff'
    }
});