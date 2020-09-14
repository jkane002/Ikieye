import { useState, useEffect } from "react";
import { generate } from "shortid";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


export const useItems = () => {
    const [items, setItems] = useState([]);

    const loadItems = async () => {
        const itemData = await AsyncStorage.getItem(
            "@ListofLoveItems:Items"
        );
        if (itemData) {
            const items = JSON.parse(itemData);
            setItems(items);
        }
    };

    const deleteItem = (id) => {
        console.log("Hi");
        // setItems(prevItems => {
        //     return prevItems.filter(item => item.id !== id);
        // });
    };

    useEffect(() => {
        if (items.length) return;
        loadItems();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem(
            "@ListofLoveItems:Items",
            JSON.stringify(items)
        );
    }, [items]);



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
