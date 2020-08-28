import React from "react";
import { TouchableOpacity, Text, Button, Alert, StyleSheet } from "react-native";
import { ScreenContainer } from "react-native-screens";

import { Card } from "../components/Card";
import ListLoveScreen from "./ListLove";
import ListWorldScreen from "./ListWorld";
import ListJobsScreen from "./ListJobs";
import ListSkillsScreen from "./ListSkills";

export const Home = ({ navigation }) => (
    <ScreenContainer style={styles.cardcontainer}>
        <Card
            name="what you love"
            pressComp={() =>
                navigation.push("ListLove", { name: "What You Love" })
            } />
        <Card
            name="what you are good at"
            pressComp={() =>
                navigation.push("ListSkills", { name: "What you are good at" })
            } />
        <Card
            name="what the world needs"
            pressComp={() =>
                navigation.push("ListWorld", { name: "What the world needs" })
            } />
        <Card
            name="what you can be paid for"
            pressComp={() =>
                navigation.push("ListJob", { name: "What you can be paid for" })
            } />
    </ScreenContainer>
);

export const ListLove = ({ route }) => (
    <ListLoveScreen name={route.params.name} />
);
export const ListJob = ({ route }) => (
    <ListJobsScreen name={route.params.name} />
);
export const ListWorld = ({ route }) => (
    <ListWorldScreen name={route.params.name} />
);
export const ListSkills = ({ route }) => (
    <ListSkillsScreen name={route.params.name} />
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
