import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Dimensions, View, TouchableOpacity, Text } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { SwipeListView } from "react-native-swipe-list-view";

import ListItem from "../components/ListItem";
import EntryForm from '../components/EntryForm';

import { useItems } from "../hooks/hooks_base";

// Store list items in a database
// Give tips on what they can enter

export default function ListWorld({ name }) {
    const db_list = "@ListofWorldItems:Items";
    const { items, addItem } = useItems({ db_list });

    // Renders the back row to delete the list item
    const renderHiddenItem = ({ item }) => {
        return (
            <View style={styles.rowBack}>
                <Text>Left</Text>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]}>
                    <Text>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}
                    onPress={() => deleteItem(item.id)}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <ScreenContainer style={styles.container}>
            <EntryForm onNewEntry={addItem} />
            <SwipeListView
                data={items}
                renderItem={({ item }) => (
                    <ListItem
                        item={item}
                    />
                )}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150} />
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
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
    },
    backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0
    },
    rowBack: {
        borderWidth: .5,
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15
    },
});