import React from 'react';
import { Text as ReactNativeText } from 'react-native';
import FontStyleWrapper from './FontStyleWrapper';

const Text = ({ style, ...props }) => (
  <FontStyleWrapper style={style}>
    {fontStyle => <ReactNativeText style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default Text;
