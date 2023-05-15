import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
} from "react-native";

const Three = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpansion}>
        <Text style={styles.text}>Toggle Expansion</Text>
      </TouchableOpacity>
      <View style={[styles.box, isExpanded && styles.expandedBox]}></View>
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
    marginBottom: 20,
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "red",
  },
  expandedBox: {
    width: 200,
    height: 200,
  },
});

export default Three;
