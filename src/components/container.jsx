import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import One from "../screens/one";
import Two from "../screens/two";
import Four from "../screens/four";
import Three from "../screens/three";

const Tab = createBottomTabNavigator();

const Container = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Gesture">
        <Tab.Screen name="Gesture" component={One} />
        <Tab.Screen name="Animated" component={Two} />
        <Tab.Screen name="Animatable" component={Four} />
        <Tab.Screen name="Layout" component={Three} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Container;
