import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SignIn, CreateAccount, Profile, Home, ListLove, ListJob, ListWorld, ListSkills } from "./screens/Screens";

// Main screens
import { GeneratorScreen } from "./screens/GeneratorScreen";
import { LikesScreen } from "./screens/LikesScreen";
import { JobBoardScreen } from "./screens/JobBoardScreen";

// Navigators
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const GeneratorStack = createStackNavigator();
const LikesStack = createStackNavigator();
const JobBoardStack = createStackNavigator();

// Icons
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
const iconSize = 26; // Bottom tab icon size

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="IkiEye" component={Home} />
    <HomeStack.Screen
      name="ListLove"
      component={ListLove}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
    <HomeStack.Screen
      name="ListJob"
      component={ListJob}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
    <HomeStack.Screen
      name="ListWorld"
      component={ListWorld}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
    <HomeStack.Screen
      name="ListSkills"
      component={ListSkills}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </HomeStack.Navigator>
);

// Having a stack screen may not be necessary
// Just have it ready, just in case

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
  <NavigationContainer >
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeStackScreen}
        options={() => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused
              ? 'home'
              : 'home-outline';

            // You can return any component that you like here!
            return <Icon name={iconName} size={iconSize} color={color} />;
          },
        })} />
      <Tabs.Screen
        name="Generator"
        component={GeneratorStackScreen}
        options={() => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused
              ? 'layers'
              : 'layers-outline';

            // You can return any component that you like here!
            return <Icon name={iconName} size={iconSize} color={color} />;
          },
        })} />
      <Tabs.Screen
        name="Likes"
        component={LikesStackScreen}
        options={() => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused
              ? 'heart'
              : 'heart-outline';

            // You can return any component that you like here!
            return <Icon name={iconName} size={iconSize} color={color} />;
          },
        })} />
      <Tabs.Screen
        name="Job Board"
        component={JobBoardStackScreen}
        options={() => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused
              ? 'briefcase'
              : 'briefcase-outline';

            // You can return any component that you like here!
            return <Icon name={iconName} size={iconSize} color={color} />;
          },
        })} />
    </Tabs.Navigator>
  </NavigationContainer>
);