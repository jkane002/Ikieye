import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { FlatList } from "react-native-gesture-handler";

import ListItem from "../components/ListItem";
import EntryForm from '../components/EntryForm';

import { useItems } from "../hooks/hooks_love";

// Store list items in a database
// Give tips on what they can enter

export default function ListLove({ name }) {
    const { items, addItem } = useItems();
    return (
        <ScreenContainer style={styles.container}>
            <EntryForm onNewEntry={addItem} />
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <ListItem
                        item={item}
                        deleteItem={deleteItem}
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