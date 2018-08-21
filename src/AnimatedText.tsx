import * as React from "react";
import { Animated, StyleProp, TextStyle } from "react-native";
import FontStyleWrapper from "./FontStyleWrapper";

const AnimatedText = ({ style, ...props }: any) => (
  <FontStyleWrapper style={style}>
    {(fontStyle) => <Animated.Text style={fontStyle} {...props} />}
  </FontStyleWrapper>
);



export default AnimatedText;
