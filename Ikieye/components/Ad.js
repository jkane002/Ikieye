import React from "react";
import { View, Text } from "react-native";

// Ads go here
// https://dev.to/srajesh636/how-to-show-ads-in-react-native-lcj

export const Ad = ({ style }) => {
    return (
        <View style={style}>
            <Text style={{ color: "white" }}>
                Placeholder: Advertisements Here
            </Text>
        </View>
    )
};
