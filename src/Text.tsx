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
import { Text as ReactNativeText, StyleProp, TextStyle, TextProps } from "react-native";
import FontStyleWrapper from "./FontStyleWrapper";

const Text = ({ style, ...props }: TextProps) => (
  <FontStyleWrapper style={style}>
    {(fontStyle) => <ReactNativeText style={fontStyle} {...props} />}
  </FontStyleWrapper>
);

export default Text;
