import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Five = () => {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(progress.value * 200) },
        { translateY: withTiming(progress.value * 200) },
      ],
      opacity: withTiming(progress.value),
    };
  });

  const handlePress = () => {
    progress.value = progress.value === 0 ? 1 : 0;
  };

  return (
    <View style={styles.container}>
      <View style={styles.squareContainer}>
        <Animated.View style={[styles.square, animatedStyle]} />
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Animate</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  squareContainer: {
    width: 200,
    height: 200,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "blue",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Five;
