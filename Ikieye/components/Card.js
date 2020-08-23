import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Alert, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';


import { styles } from '../styles/styles';

onPressLove = ({ navigate }) => {
    Alert.alert("Love");
    // this.props.navigation.navigate(WhatYouLove);
};
onPressGood = () => {
    Alert.alert("Good");
};
onPressJobs = () => {
    Alert.alert("Jobs");
};
onPressWorld = () => {
    Alert.alert("World");
};

export function Card(props) {
    return (
        // <NavigationContainer independent={true}>
        <TouchableOpacity
            style={styles.card}
            onPress={props.pressComp}>
            <View style={styles.cardinner}>
                <Text style={styles.title_cards}>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
        // </NavigationContainer>
    );
}


