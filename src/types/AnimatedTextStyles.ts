import { StyleProp, TextStyle, TransformsStyle, Animated } from 'react-native';

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/12202
type AnimatedTextStyles = StyleProp<{
  [key in keyof TextStyle] : (
    Animated.Value | TextStyle[key] |
    [{ [transformKey in keyof TransformsStyle] : Animated.Value | TransformsStyle[transformKey] }]
  );
}>;

export default AnimatedTextStyles;