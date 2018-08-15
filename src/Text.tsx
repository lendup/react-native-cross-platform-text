import React from "react";
import { Text as ReactNativeText } from "react-native";
import FontStyleWrapper from "./FontStyleWrapper";
import ExtendedTextStyles from "./types/ExtendedTextStyles";

interface TextProps {
  style: ExtendedTextStyles;
}

const Text = ({ style, ...props }: TextProps) => (
  <FontStyleWrapper style={style}>
    {(fontStyle) => <ReactNativeText style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default Text;
