import { useState, useEffect } from "react";
import { generate } from "shortid";
import { AsyncStorage } from "react-native";

export const useItems = () => {
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
