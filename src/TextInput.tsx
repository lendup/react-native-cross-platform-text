import React from "react";
import { TextInput as ReactNativeTextInput } from "react-native";
import FontStyleWrapper from "./FontStyleWrapper";
import ExtendedTextStyles from "./types/ExtendedTextStyles";

interface TextInputProps {
  style: ExtendedTextStyles;
}

const TextInput = ({ style, ...props }: TextInputProps) => (
  <FontStyleWrapper style={style}>
    {(fontStyle) => <ReactNativeTextInput style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default TextInput;
