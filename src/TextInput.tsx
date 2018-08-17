import * as React from "react";
import { TextInput as ReactNativeTextInput, StyleProp, TextStyle } from "react-native";
import FontStyleWrapper from "./FontStyleWrapper";

interface TextInputProps {
  // https://basarat.gitbooks.io/typescript/docs/types/index-signatures.html
  [k: string]: any;
  style: StyleProp<TextStyle>;
}

const TextInput = ({ style, ...props }: TextInputProps) => (
  <FontStyleWrapper style={style}>
    {(fontStyle) => <ReactNativeTextInput style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default TextInput;
