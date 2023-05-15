import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import One from "./src/screens/one";
import Two from "./src/screens/two";
import Four from "./src/screens/four";
import Three from "./src/screens/three";
import Container from "./src/components/container";

//navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="One">
    //     <Stack.Screen name="One" component={One} />
    //     <Stack.Screen name="Two" component={Two} />
    //     <Stack.Screen name="Three" component={Three} />
    //     <Stack.Screen name="Four" component={Four} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Container />
  );
};

const styles = StyleSheet.create({});

export default App;
