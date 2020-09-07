import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();

export default function EntryForm({ onNewEntry = f => f }) {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);

    // const [inputValue, setValue] = useState("");
    // const input = useRef();
    return (
        <View>
            <TextInput
                // ref={input}
                placeholder="Add Item..."
                style={styles.input}
                onChangeText={onChange}
                // value={text}
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    // input.current.blur();
                    onNewEntry(text);
                    // setText("");
                }}>
                <Text style={styles.btnText}>
                    <Icon name="plus" size={20} /> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        margin: 5,
        width: Dimensions.get('window').width
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
});

