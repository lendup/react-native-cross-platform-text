import { StyleProp, TextStyle, Animated } from 'react-native';

type AnimatedTextStyles = StyleProp<{
  [key in keyof TextStyle] : Animated.Value | TextStyle[key];
}>

export default AnimatedTextStyles;