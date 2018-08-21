/*
Copyright 2018 LendUp Global, Inc.
 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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
