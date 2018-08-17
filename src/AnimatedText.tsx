import * as React from "react";
import { Animated, StyleProp, TextStyle } from "react-native";
import FontStyleWrapper from "./FontStyleWrapper";
import AnimatedTextStyles from './types/AnimatedTextStyles';

interface AnimatedTextProps {
  // https://basarat.gitbooks.io/typescript/docs/types/index-signatures.html
  [k: string]: any;
  style: AnimatedTextStyles;
}

const AnimatedText = ({ style, ...props }: AnimatedTextProps) => (
  <FontStyleWrapper style={style}>
    {(fontStyle) => <Animated.Text style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default AnimatedText;
