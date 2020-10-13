import React from "react";
import { Text, Button, StyleSheet, View } from "react-native";
import { ScreenContainer } from "react-native-screens";

import { Card } from "../components/Card";
import ListLoveScreen from "./ListLove";
import ListWorldScreen from "./ListWorld";
import ListJobsScreen from "./ListJobs";
import ListSkillsScreen from "./ListSkills";

import { Ad } from "../components/Ad";

// The Home Screen - Navigate to individual cards, provide info on IkiEye, ads 

export const Home = ({ navigation }) => (
    <ScreenContainer style={styles.container}>
        <View style={styles.home_bar}>
            <Text>Placeholder: IkiEye Information</Text>
        </View>
        <View style={styles.all_cards_container}>
            <Card
                name="what you love"
                pressComp={() =>
                    navigation.navigate("ListLove", { name: "What You Love" })
                } />
            <Card
                name="what you are good at"
                pressComp={() =>
                    navigation.navigate("ListSkills", { name: "What you are good at" })
                } />
            <Card
                name="what the world needs"
                pressComp={() =>
                    navigation.navigate("ListWorld", { name: "What the world needs" })
                } />
            <Card
                name="what you can be paid for"
                pressComp={() =>
                    navigation.navigate("ListJob", { name: "What you can be paid for" })
                } />
        </View>
        <Ad style={styles.ad_container} />
    </ScreenContainer>
);

// Card components - for navigation
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


const styles = StyleSheet.create({
    // overall screen container
    container: {
        flex: 1
    },
    // top home bar
    home_bar: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"

    },
    // container for all cards
    all_cards_container: {
        flex: 6,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    },
    // container for ads
    ad_container: {
        backgroundColor: "gray",
        flex: .75,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});

// Not needed yet
/*
// export const Profile = ({ navigation }) => {

// export const CreateAccount = () => {
//     return (
//         <ScreenContainer>
//             <Text>Create Account Screen</Text>
//             <Button title="Sign Up" onPress={() => alert("todo")} />
//         </ScreenContainer>
//     );
// };

//     return (
//         <ScreenContainer style={styles.container}>
//             <Text>Profile Screen</Text>
//             <Button title="Drawer" onPress={() => alert("todo")} />
//             <Button title="Sign Out" onPress={() => alert("todo")} />
//         </ScreenContainer>
//     );
// };

// export const SignIn = ({ navigation }) => {
//     return (
//         <ScreenContainer>
//             <Text>Sign In Screen</Text>
//             <Button title="Sign In" onPress={() => alert("todo")} />
//             <Button
//                 title="Create Account"
//                 onPress={() => navigation.push('CreateAccount')} />
//         </ScreenContainer>
//     );
// };
*/