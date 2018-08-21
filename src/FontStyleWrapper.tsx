import * as React from "react";
import { StyleSheet, StyleProp, TextStyle } from "react-native";
import getFontStyleForWeight from "./getFontStyleForWeight";

interface FontStyleWrapperProps {
  children: (updatedStyle: StyleProp<TextStyle>) => React.ReactElement<{}>;
  style: StyleProp<TextStyle>;
}

const FontStyleWrapper = ({ style, children }: FontStyleWrapperProps) => {
  const flatStyle = StyleSheet.flatten(style);
  const fontStyleForWeight = getFontStyleForWeight(flatStyle.fontFamily, flatStyle.fontWeight);
  const updatedStyle = Object.assign({}, flatStyle, fontStyleForWeight);
  return children(updatedStyle);
};

export default FontStyleWrapper;
