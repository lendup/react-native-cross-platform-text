import React from "react";
import { StyleProp, Text as ReactNativeText, TextStyle } from "react-native";
import FontStyleWrapper from "./FontStyleWrapper";

interface TextProps {
  style: StyleProp<TextStyle>;
}

const Text = ({ style, ...props }: TextProps) => (
  <FontStyleWrapper style={style}>
    {(fontStyle) => <ReactNativeText style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default Text;
