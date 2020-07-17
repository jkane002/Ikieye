import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import { styles } from '../styles/styles';

export default class Feed extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}>Navigation Drawer</Text>
                <Button
                    title='Bottom tabs'
                    onPress={() => this.props.navigation.navigate('Bottom Tabs')}
                />
            </View >
        );
    }
}
