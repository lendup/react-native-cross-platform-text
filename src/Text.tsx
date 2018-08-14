import React from 'react';
import { Text as ReactNativeText, TextStyle, StyleProp } from 'react-native';
import FontStyleWrapper from './FontStyleWrapper';

interface TextProps {
  style: StyleProp<TextStyle>;
}

const Text = ({ style, ...props }: TextProps) => (
  <FontStyleWrapper style={style}>
    {fontStyle => <ReactNativeText style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default Text;
