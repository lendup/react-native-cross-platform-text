import * as React from "react";
import { TextInput as ReactNativeTextInput, TextInputProps } from "react-native";
import FontStyleWrapper from "./FontStyleWrapper";

const TextInput = ({ style, ...props }: TextInputProps) => (
  <FontStyleWrapper style={style}>
    {(fontStyle) => <ReactNativeTextInput style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default TextInput;
