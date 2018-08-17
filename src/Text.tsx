import * as React from "react";
import { Text as ReactNativeText, StyleProp, TextStyle } from "react-native";
import FontStyleWrapper from "./FontStyleWrapper";

interface TextProps {
  // https://basarat.gitbooks.io/typescript/docs/types/index-signatures.html
  [k: string]: any;
  style: StyleProp<TextStyle>;
}

const Text = ({ style, ...props }: TextProps) => (
  <FontStyleWrapper style={style}>
    {(fontStyle) => <ReactNativeText style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default Text;
