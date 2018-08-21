import * as React from "react";
import { Text as ReactNativeText, StyleProp, TextStyle, TextProps } from "react-native";
import FontStyleWrapper from "./FontStyleWrapper";

const Text = ({ style, ...props }: TextProps) => (
  <FontStyleWrapper style={style}>
    {(fontStyle) => <ReactNativeText style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default Text;
