import React from 'react';
import { TextInput as ReactNativeTextInput } from 'react-native';
import FontStyleWrapper from './FontStyleWrapper';

const TextInput = ({ style, ...props }) => (
  <FontStyleWrapper style={style}>
    {fontStyle => <ReactNativeTextInput style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default TextInput;
