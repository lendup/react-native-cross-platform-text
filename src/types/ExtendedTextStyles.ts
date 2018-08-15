import { StyleProp, TextStyle, Animated } from 'react-native';

// ref https://github.com/DefinitelyTyped/DefinitelyTyped/issues/12202
type ExtendedTextStyles = StyleProp<{
  [key in keyof TextStyle] : Animated.Value | TextStyle[key];
}>

export default ExtendedTextStyles;