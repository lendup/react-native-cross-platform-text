import * as React from "react";
import { Platform, Text } from "react-native";
import * as ShallowRenderer from "react-test-renderer/shallow";
import FontStyleWrapper from "../FontStyleWrapper";
import mockStyles from '../__mocks__/mockStyles';

jest.mock("Platform");

it("iOS returns fontFamily and weight for normal", () => {
  Platform.OS = "ios";
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(
    <FontStyleWrapper style={mockStyles.fontStyle}>
      {(fontStyle) => <Text style={fontStyle} />}
    </FontStyleWrapper>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it("Android returns fontFamily-Regular and weight = undefined for normal", () => {
  Platform.OS = "android";
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(
    <FontStyleWrapper style={mockStyles.fontStyle}>
      {(fontStyle) => <Text style={fontStyle} />}
    </FontStyleWrapper>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it("flattens styles", () => {
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(
    <FontStyleWrapper
      style={[
        mockStyles.section,
        [mockStyles.container, mockStyles.fontStyle],
      ]}
    >
      {(fontStyle) => <Text style={fontStyle} />}
    </FontStyleWrapper>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
