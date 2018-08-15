import React from "react";
import { Animated } from "react-native";
import FontStyleWrapper from "./FontStyleWrapper";
import ExtendedTextStyles from "./types/ExtendedTextStyles";

interface AnimatedTextProps {
  style: ExtendedTextStyles;
}

const AnimatedText = ({ style, ...props }: AnimatedTextProps) => (
  <FontStyleWrapper style={style}>
    {(fontStyle) => <Animated.Text style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default AnimatedText;
