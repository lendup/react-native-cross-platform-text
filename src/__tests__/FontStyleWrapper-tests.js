import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import FontStyleWrapper from '../FontStyleWrapper';

const mockStyles = StyleSheet.create({
  fontStyle: {
    fontWeight: 'normal',
    fontFamily: 'Arial',
  },
  section: {
    paddingHorizontal: 10,
  },
  container: {
    margin: 20,
  },
});

jest.mock('Platform');

it('iOS returns fontFamily and weight for normal', () => {
  Platform.OS = 'ios';
  const renderer = new ShallowRenderer();
  renderer.render(
    <FontStyleWrapper style={mockStyles.style}>
      {fontStyle => <Text style={fontStyle} />}
    </FontStyleWrapper>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('returns fontFamily and weight for normal', () => {
  Platform.OS = 'android';
  const renderer = new ShallowRenderer();
  renderer.render(
    <FontStyleWrapper style={mockStyles.style}>
      {fontStyle => <Text style={fontStyle} />}
    </FontStyleWrapper>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('flattens styles', () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <FontStyleWrapper
      style={[
        mockStyles.section,
        [mockStyles.container, mockStyles.fontStyle],
      ]}
    >
      {fontStyle => <Text style={fontStyle} />}
    </FontStyleWrapper>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('passes through other props', () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <FontStyleWrapper
      style={mockStyles.style}
      selectable
      allowFontScaling={false}
      onPress={() => {}}
    >
      {fontStyle => <Text style={fontStyle} />}
    </FontStyleWrapper>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
