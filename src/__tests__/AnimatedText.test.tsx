import * as React from "react";
import { Platform, Animated, StyleSheet } from "react-native";
import * as ShallowRenderer from "react-test-renderer/shallow";
import AnimatedText from "../AnimatedText";
import mockStyles from './__mocks__/mockStyles';

jest.mock("Platform");

it("iOS returns fontFamily and weight for normal", () => {
  Platform.OS = "ios";
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<AnimatedText style={mockStyles.fontStyle}>this is iOS</AnimatedText>);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it("Android returns fontFamily-Regular and weight = undefined for normal", () => {
  Platform.OS = "android";
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<AnimatedText style={mockStyles.fontStyle}>this is Android</AnimatedText>);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it("flattens styles", () => {
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(
    <AnimatedText
      style={[
        mockStyles.section,
        [mockStyles.container, mockStyles.fontStyle],
      ]}
    >works with nested styles!</AnimatedText>
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it("works with animated styles", () => {
  const animatedValue = new Animated.Value(0);
  const animatedStyle = {
    position: 'absolute',
    // top: animatedValue,
    color: 'red',
  };
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(
    <AnimatedText
      style={[mockStyles.fontStyle, animatedStyle]}
    >works with nested styles!</AnimatedText>
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
})
