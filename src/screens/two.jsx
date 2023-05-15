import React from "react";
import { Animated, StyleSheet, View } from "react-native";

const animatedValue = new Animated.Value(0);

const Two = () => {
  return (
    <View style={styles.container}>
      <Animated.View style={styles.box}></Animated.View>
    </View>
  );
};

Animated.timing(animatedValue, {
  toValue: 1,
  duration: 2000,
  useNativeDriver: true,
}).start();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    opacity: animatedValue,
    width: 200,
    height: 200,
    borderRadius: 10,
    backgroundColor: "red",
  },
});

export default Two;
