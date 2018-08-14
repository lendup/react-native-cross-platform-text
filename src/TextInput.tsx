import React from 'react';
import { TextInput as ReactNativeTextInput, TextStyle } from 'react-native';
import FontStyleWrapper from './FontStyleWrapper';

interface TextInputProps {
  style: TextStyle;
}

const TextInput = ({ style, ...props }: TextInputProps) => (
  <FontStyleWrapper style={style}>
    {fontStyle => <ReactNativeTextInput style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default TextInput;
