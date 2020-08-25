import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SignIn, CreateAccount, Profile, Home, Details } from "./screens/Screens";

import { GeneratorScreen } from "./screens/GeneratorScreen";
import { LikesScreen } from "./screens/LikesScreen";
import { JobBoardScreen } from "./screens/JobBoardScreen";

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const GeneratorStack = createStackNavigator();
const LikesStack = createStackNavigator();
const JobBoardStack = createStackNavigator();



const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </HomeStack.Navigator>
);

// Having a stack screen may not be necessary
// Just have it, just in case

const GeneratorStackScreen = () => (
  <GeneratorStack.Navigator>
    <GeneratorStack.Screen name="Generator" component={GeneratorScreen} />
  </GeneratorStack.Navigator>
);

const LikesStackScreen = () => (
  <LikesStack.Navigator>
    <LikesStack.Screen name="Likes" component={LikesScreen} />
  </LikesStack.Navigator>
);

const JobBoardStackScreen = () => (
  <JobBoardStack.Navigator>
    <JobBoardStack.Screen name="Job Board" component={JobBoardScreen} />
  </JobBoardStack.Navigator>
);


export default () => (
  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Generator" component={GeneratorStackScreen} />
      <Tabs.Screen name="Likes" component={LikesStackScreen} />
      <Tabs.Screen name="Job Board" component={JobBoardStackScreen} />
    </Tabs.Navigator>
  </NavigationContainer>
);