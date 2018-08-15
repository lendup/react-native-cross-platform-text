import React from "react";
import { StyleSheet, StyleProp, TextStyle } from "react-native";
import getFontStyleForWeight from "./getFontStyleForWeight";
import ExtendedTextStyles from "./types/ExtendedTextStyles";

interface FontStyleWrapperProps {
  children: (styles: TextStyle) => React.ReactElement<{}>;
  style: ExtendedTextStyles;
}

const FontStyleWrapper = ({ style, children }: FontStyleWrapperProps) => {
  const flatStyle = StyleSheet.flatten(style as StyleProp<TextStyle>);  // workaround to add animated values, ref https://github.com/DefinitelyTyped/DefinitelyTyped/issues/12202
  const fontStyleForWeight = getFontStyleForWeight(flatStyle.fontFamily, flatStyle.fontWeight);
  const styles = Object.assign({}, flatStyle, fontStyleForWeight);
  return children(styles);
};

export default FontStyleWrapper;
