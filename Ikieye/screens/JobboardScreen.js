import React from "react";
import { Text, Button, } from 'react-native';
import { styles } from '../styles/styles';

import { ScreenContainer } from "react-native-screens";


export const JobBoardScreen = ({ navigation }) => {
  return (
    <ScreenContainer style={styles.screencontainer}>
      <Text>Job Board Screen</Text>
      <Button title="Drawer" onPress={() => alert("todo")} />
      <Button title="Sign Out" onPress={() => alert("todo")} />
    </ScreenContainer>
  )
};

