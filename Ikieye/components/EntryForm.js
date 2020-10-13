import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

// The Entry Form includes the text field and the add button to enter items

// TODO
// Finding duplicates part of backend?

export default function EntryForm({ onNewEntry = f => f }) {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);

    return (
        <View>
            <TextInput
                placeholder="Add Item..."
                style={styles.input}
                onChangeText={onChange}
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.addItem_btn}
                onPress={() => {
                    onNewEntry(text);
                }}>
                <Text style={styles.addItem_btnText}>
                    <Icon name="add" size={20} /> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    // Input field
    input: {
        height: 60,
        padding: 8,
        margin: 5,
        width: Dimensions.get('window').width
    },
    // Add Item Button
    addItem_btn: {
        backgroundColor: '#c2bad8',
        padding: 9
    },
    // Text styling in Add Item
    addItem_btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
});