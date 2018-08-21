import * as React from "react";
import { Platform, Animated } from "react-native";
import * as renderer from 'react-test-renderer';
import AnimatedText from "../AnimatedText";
import mockStyles from '../__mocks__/mockStyles';

jest.mock('Platform');

it("iOS returns fontFamily and weight for normal", () => {
  Platform.OS = 'ios';
  const tree = renderer.create(
    <AnimatedText style={mockStyles.fontStyle}>this is iOS</AnimatedText>
  );
  expect(tree).toMatchSnapshot();
});

it("Android returns fontFamily-Regular and weight = undefined for normal", () => {
  Platform.OS = 'android';
  const tree = renderer.create(
    <AnimatedText style={mockStyles.fontStyle}>this is Android</AnimatedText>
  );
  expect(tree).toMatchSnapshot();
});

it("flattens styles", () => {
  const tree = renderer.create(
    <AnimatedText
      style={[
        mockStyles.section,
        [mockStyles.container, mockStyles.fontStyle],
      ]}
    >works with nested styles!</AnimatedText>
  );
  expect(tree).toMatchSnapshot();
});

it("works with animated styles", () => {
  const animatedValue = new Animated.Value(12);
  const animatedStyle = {
    fontSize: animatedValue,
    transform: [{ translateY: animatedValue }],
  };
  const tree = renderer.create(
    <AnimatedText
      style={[mockStyles.fontStyle, animatedStyle]}
    >works with animated styles!</AnimatedText>
  );
  expect(tree).toMatchSnapshot();
});

it("passes Animated.Text props through", () => {
  const tree = renderer.create(
    <AnimatedText
      style={mockStyles.fontStyle}
      allowFontScaling={false}
    >passes props through!</AnimatedText>
  );
  expect(tree).toMatchSnapshot();
});
