import * as React from "react";
import { Platform } from "react-native";
import * as renderer from 'react-test-renderer';
import Text from "../Text";
import mockStyles from '../__mocks__/mockStyles';

jest.mock('Platform');

it("iOS returns fontFamily and weight for normal", () => {
  Platform.OS = 'ios';
  const tree = renderer.create(<Text style={mockStyles.fontStyle}>this is iOS</Text>);
  expect(tree).toMatchSnapshot();
});

it("Android returns fontFamily-Regular and weight = undefined for normal", () => {
  Platform.OS = 'android';
  const tree = renderer.create(<Text style={mockStyles.fontStyle}>this is Android</Text>);
  expect(tree).toMatchSnapshot();
});

it("flattens styles", () => {
  const tree = renderer.create(
    <Text
      style={[
        mockStyles.section,
        [mockStyles.container, mockStyles.fontStyle],
      ]}
    >works with nested styles!</Text>
  );
  expect(tree).toMatchSnapshot();
});

it("passes Text props through", () => {
  const tree = renderer.create(
    <Text
      style={mockStyles.fontStyle}
      allowFontScaling={false}
    >passes through props!</Text>
  );
  expect(tree).toMatchSnapshot();
});
