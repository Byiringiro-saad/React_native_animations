import React from "react";
import * as Animatable from "react-native-animatable";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Four = () => {
  const onPress = () => {
    this.textRef.bounce(800);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Animatable.Text
          ref={(ref) => (this.textRef = ref)}
          style={styles.text}
          animation="fadeIn"
          duration={1000}
        >
          Click me!
        </Animatable.Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Four;
