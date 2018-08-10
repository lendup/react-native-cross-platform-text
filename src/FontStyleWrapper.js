import { StyleSheet } from 'react-native';
import getFontStyleForWeight from './getFontStyleForWeight';

const FontStyleWrapper = ({ style, children }) => {
  const flatStyle = StyleSheet.flatten(style);
  const fontStyleForWeight = getFontStyleForWeight(flatStyle.fontWeight, flatStyle.fontFamily);
  return children([flatStyle, fontStyleForWeight]);
};

export default FontStyleWrapper;
