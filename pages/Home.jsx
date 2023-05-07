import { Animated } from "react-native";

const animatedValue = new Animated.Value(0);

<Animated.View style={{ opacity: animatedValue }}>
  {/* Content */}
</Animated.View>;

Animated.timing(animatedValue, {
  toValue: 1,
  duration: 1000,
}).start();
