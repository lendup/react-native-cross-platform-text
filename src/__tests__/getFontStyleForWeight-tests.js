import { Platform } from 'react-native';
import getFontStyleForWeight from '../getFontStyleForWeight';

jest.mock('Platform');

const fontFamily = 'Arial';

test('android', () => {
  Platform.OS = 'android';
  it('returns fontFamily-Regular for normal', () => {
    expect(getFontStyleForWeight('normal', fontFamily))
    .toEqual({
      fontFamily: `${fontFamily}-Regular`,
      fontWeight: undefined,
    });
  });

  it('returns fontFamily-Black for 900', () => {
    expect(getFontStyleForWeight('900', fontFamily))
    .toEqual({
      fontFamily: `${fontFamily}-Black`,
      fontWeight: undefined,
    });
  });
});

test('ios', () => {
  Platform.OS = 'ios';
  it('returns fontFamily and weight for normal', () => {
    expect(getFontStyleForWeight('normal', fontFamily))
    .toEqual({
      fontFamily,
      fontWeight: 'normal',
    });
  });

  it('returns fontFamily and weight for 900', () => {
    expect(getFontStyleForWeight('900', fontFamily))
    .toEqual({
      fontFamily,
      fontWeight: '900',
    });
  });
});
