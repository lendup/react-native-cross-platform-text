import * as React from "react";
import { Platform } from "react-native";
import * as ShallowRenderer from "react-test-renderer/shallow";
import Text from "../Text";
import mockStyles from './__mocks__/mockStyles';

jest.mock("Platform");

it("iOS returns fontFamily and weight for normal", () => {
  Platform.OS = "ios";
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<Text style={mockStyles.fontStyle}>this is iOS</Text>);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it("Android returns fontFamily-Regular and weight = undefined for normal", () => {
  Platform.OS = "android";
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<Text style={mockStyles.fontStyle}>this is Android</Text>);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it("flattens styles", () => {
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(
    <Text
      style={[
        mockStyles.section,
        [mockStyles.container, mockStyles.fontStyle],
      ]}
    >works with nested styles!</Text>
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
