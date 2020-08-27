import React from "react";
import { TouchableOpacity, Text, Button, Alert, StyleSheet } from "react-native";
import { ScreenContainer } from "react-native-screens";

import { Card } from "../components/Card";
import DetailScreen from "./Details";


export const Home = ({ navigation }) => (
    <ScreenContainer style={styles.cardcontainer}>
        <Card
            name="What you love"
            pressComp={() =>
                navigation.push("Details", { name: "What you love" })
            } />
        <Card
            name="What you are good at"
            pressComp={() =>
                navigation.push("Details", { name: "What you are good at" })
            } />
        <Card
            name="What the world needs"
            pressComp={() =>
                navigation.push("Details", { name: "What the world needs" })
            } />
        <Card
            name="What you can be paid for"
            pressComp={() =>
                navigation.push("Details", { name: "What you can be paid for" })
            } />
    </ScreenContainer>
);

export const Details = ({ route }) => (
    <DetailScreen name={route.params.name} />
);


export const Profile = ({ navigation }) => {

    return (
        <ScreenContainer style={styles.container}>
            <Text>Profile Screen</Text>
            <Button title="Drawer" onPress={() => alert("todo")} />
            <Button title="Sign Out" onPress={() => alert("todo")} />
        </ScreenContainer>
    );
};

export const SignIn = ({ navigation }) => {
    return (
        <ScreenContainer>
            <Text>Sign In Screen</Text>
            <Button title="Sign In" onPress={() => alert("todo")} />
            <Button
                title="Create Account"
                onPress={() => navigation.push('CreateAccount')} />
        </ScreenContainer>
    );
};
export const CreateAccount = () => {
    return (
        <ScreenContainer>
            <Text>Create Account Screen</Text>
            <Button title="Sign Up" onPress={() => alert("todo")} />
        </ScreenContainer>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    cardcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    }
});
