import { StyleSheet, TextStyle, View } from 'react-native';
import getFontStyleForWeight from './getFontStyleForWeight';


interface FontStyleWrapperProps {
  children: (styles: TextStyle) => React.ReactElement<{}>;
  style: TextStyle;
}

const FontStyleWrapper = ({ style, children }: FontStyleWrapperProps) => {
  const flatStyle = StyleSheet.flatten(style);
  const fontStyleForWeight = getFontStyleForWeight(flatStyle.fontFamily, flatStyle.fontWeight);
  const styles = Object.assign({}, flatStyle, fontStyleForWeight);
  return children(styles);
};

export default FontStyleWrapper;
