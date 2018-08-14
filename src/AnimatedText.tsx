import React from 'react';
import { Animated, TextStyle } from 'react-native';
import FontStyleWrapper from './FontStyleWrapper';

interface AnimatedTextProps {
  style: TextStyle;
}

const AnimatedText = ({ style, ...props }: AnimatedTextProps) => (
  <FontStyleWrapper style={style}>
    {(fontStyle: TextStyle) => <Animated.Text style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default AnimatedText;
