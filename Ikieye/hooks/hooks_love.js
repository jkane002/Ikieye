import { useState, useEffect } from "react";
import { generate } from "shortid";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


export const useItems = () => {
    const [items, setItems] = useState([]);

    // Uses AsyncStorage to store data
    const loadItems = async () => {
        const itemData = await AsyncStorage.getItem(
            "@ListofLoveItems:Items"
        );
        if (itemData) {
            const items = JSON.parse(itemData);
            setItems(items);
        }
    };

    // Filters data by id, deletes it
    deleteItem = id => {
        const filtered_items = items.filter(item => item.id !== id);
        setItems(filtered_items);
    };

    // If a list item exists, load them
    useEffect(() => {
        if (items.length) return;
        loadItems();
    }, []);

    // Sets items for async
    useEffect(() => {
        AsyncStorage.setItem(
            "@ListofLoveItems:Items",
            JSON.stringify(items)
        );
    }, [items]);

    // TODO: if no text, disable keyboard & replace alerts
    // Generates a new id with text, sets items
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
