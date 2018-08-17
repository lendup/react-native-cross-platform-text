import * as React from "react";
import { Platform } from "react-native";
import * as ShallowRenderer from "react-test-renderer/shallow";
import TextInput from "../TextInput";
import mockStyles from '../__mocks__/mockStyles';

jest.mock("Platform");

it("iOS returns fontFamily and weight for normal", () => {
  Platform.OS = "ios";
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<TextInput style={mockStyles.fontStyle}>this is iOS</TextInput>);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it("Android returns fontFamily-Regular and weight = undefined for normal", () => {
  Platform.OS = "android";
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<TextInput style={mockStyles.fontStyle}>this is Android</TextInput>);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it("flattens styles", () => {
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(
    <TextInput
      style={[
        mockStyles.section,
        [mockStyles.container, mockStyles.fontStyle],
      ]}
    >works with nested styles!</TextInput>
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it("passes TextInput props through", () => {
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(
    <TextInput
      style={mockStyles.fontStyle}
      allowFontScaling={false}
    >works with nested styles!</TextInput>
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
})
