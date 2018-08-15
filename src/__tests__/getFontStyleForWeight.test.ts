import { Platform } from 'react-native';
import getFontStyleForWeight from '../getFontStyleForWeight';

jest.mock('Platform');

const fontFamily = 'Arial';

describe('android', () => {
  // Platform.OS = 'android';
  it('returns fontFamily-Regular for normal', () => {
    Platform.OS = 'android';
    expect(getFontStyleForWeight(fontFamily, 'normal'))
    .toEqual({
      fontFamily: `${fontFamily}-Regular`,
      fontWeight: undefined,
    });
  });

  it('returns fontFamily-Black for 900', () => {
    Platform.OS = 'android';
    expect(getFontStyleForWeight(fontFamily, '900'))
    .toEqual({
      fontFamily: `${fontFamily}-Black`,
      fontWeight: undefined,
    });
  });
});

describe('ios', () => {
  // Platform.OS = 'ios';
  it('returns fontFamily and weight for normal', () => {
    Platform.OS = 'ios';
    expect(getFontStyleForWeight(fontFamily, 'normal'))
    .toEqual({
      fontFamily,
      fontWeight: 'normal',
    });
  });

  it('returns fontFamily and weight for 900', () => {
    Platform.OS = 'ios';
    expect(getFontStyleForWeight(fontFamily, '900'))
    .toEqual({
      fontFamily,
      fontWeight: '900',
    });
  });
});
