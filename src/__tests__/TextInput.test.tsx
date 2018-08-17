import * as React from "react";
import { Platform } from "react-native";
import * as renderer from 'react-test-renderer';
import TextInput from "../TextInput";
import mockStyles from '../__mocks__/mockStyles';

jest.mock('Platform');

it("iOS returns fontFamily and weight for normal", () => {
  Platform.OS = 'ios';
  const tree = renderer.create(<TextInput style={mockStyles.fontStyle}>this is iOS</TextInput>);
  expect(tree).toMatchSnapshot();
});

it("Android returns fontFamily-Regular and weight = undefined for normal", () => {
  Platform.OS = 'android';
  const tree = renderer.create(<TextInput style={mockStyles.fontStyle}>this is Android</TextInput>);
  expect(tree);
});

it("flattens styles", () => {
  const tree = renderer.create(
    <TextInput
      style={[
        mockStyles.section,
        [mockStyles.container, mockStyles.fontStyle],
      ]}
    >works with nested styles!</TextInput>
  );
  expect(tree).toMatchSnapshot();
});

it("passes TextInput props through", () => {
  const tree = renderer.create(
    <TextInput
      style={mockStyles.fontStyle}
      defaultValue="Amazing"
    >passes props through!</TextInput>
  );
  expect(tree).toMatchSnapshot();
});
