import * as React from "react";
import { Platform, Text } from "react-native";
import * as renderer from 'react-test-renderer';
import FontStyleWrapper from "../FontStyleWrapper";
import mockStyles from '../__mocks__/mockStyles';

jest.mock('Platform');

it("iOS returns fontFamily and weight for normal", () => {
  Platform.OS = 'ios';
  const tree = renderer.create(
    <FontStyleWrapper style={mockStyles.fontStyle}>
      {(fontStyle) => <Text style={fontStyle}>this is iOS</Text>}
    </FontStyleWrapper>,
  );
  expect(tree).toMatchSnapshot();
});

it("Android returns fontFamily-Regular and weight = undefined for normal", () => {
  Platform.OS = 'android';
  const tree = renderer.create(
    <FontStyleWrapper style={mockStyles.fontStyle}>
      {(fontStyle) => <Text style={fontStyle}>this is Android</Text>}
    </FontStyleWrapper>,
  );
  expect(tree).toMatchSnapshot();
});

it("flattens styles", () => {
  const tree = renderer.create(
    <FontStyleWrapper
      style={[
        mockStyles.section,
        [mockStyles.container, mockStyles.fontStyle],
      ]}
    >
      {(fontStyle) => <Text style={fontStyle}>}works with nested styles!</Text>}
    </FontStyleWrapper>,
  );
  expect(tree).toMatchSnapshot();
});
