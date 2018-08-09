import React from 'react';
import {
  Text as ReactNativeText,
  TextInput as ReactNativeTextInput,
  Animated,
  Platform,
  StyleSheet,
} from 'react-native';

export const getFontStyleForWeight = (fontWeight, fontFamily) => {
  if (Platform.OS === 'ios') return { fontFamily, fontWeight };
  switch (fontWeight) {
    case 'normal': return { fontFamily: `${fontFamily}-Regular`, fontWeight: undefined };
    case 'bold': return { fontFamily: `${fontFamily}-Bold`, fontWeight: undefined };
    case '100': return { fontFamily: `${fontFamily}-Thin`, fontWeight: undefined };
    case '200': return { fontFamily: `${fontFamily}-ExtraLight`, fontWeight: undefined };
    case '300': return { fontFamily: `${fontFamily}-Light`, fontWeight: undefined };
    case '400': return { fontFamily: `${fontFamily}-Regular`, fontWeight: undefined };
    case '500': return { fontFamily: `${fontFamily}-Medium`, fontWeight: undefined };
    case '600': return { fontFamily: `${fontFamily}-SemiBold`, fontWeight: undefined };
    case '700': return { fontFamily: `${fontFamily}-Bold`, fontWeight: undefined };
    case '800': return { fontFamily: `${fontFamily}-ExtraBold`, fontWeight: undefined };
    case '900': return { fontFamily: `${fontFamily}-Black`, fontWeight: undefined };
    default: return { fontFamily: `${fontFamily}-Regular`, fontWeight: undefined };
  }
};

export const FontStyleWrapper = ({ style, children }) => {
  const flatStyle = StyleSheet.flatten(style);
  const fontStyleForWeight = getFontStyleForWeight(flatStyle.fontWeight, flatStyle.fontFamily);
  return children([flatStyle, fontStyleForWeight]);
};

export const Text = ({ style, ...props }) => (
  <FontStyleWrapper style={style}>
    {fontStyle => <ReactNativeText style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export const TextInput = ({ style, ...props }) => (
  <FontStyleWrapper style={style}>
    {fontStyle => <ReactNativeTextInput style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export const AnimatedText = ({ style, ...props }) => (
  <FontStyleWrapper style={style}>
    {fontStyle => <Animated.Text style={fontStyle} {...props} />}
  </FontStyleWrapper>
);
