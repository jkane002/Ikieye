import React from "react";
import { Text, Button, } from 'react-native';
import { styles } from '../styles/styles';

import { ScreenContainer } from "react-native-screens";


export const GeneratorScreen = () => {
  return (
    <ScreenContainer style={styles.screencontainer}>
      <Text>Generator Screen</Text>
      <Text>Need to have async working</Text>
      <Button title="Drawer" onPress={() => alert("todo")} />
      <Button title="Sign Out" onPress={() => alert("todo")} />
    </ScreenContainer>
  )
};

