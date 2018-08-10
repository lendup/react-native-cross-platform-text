import React from 'react';
import { Animated } from 'react-native';
import FontStyleWrapper from './FontStyleWrapper';

const AnimatedText = ({ style, ...props }) => (
  <FontStyleWrapper style={style}>
    {fontStyle => <Animated.Text style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default AnimatedText;
