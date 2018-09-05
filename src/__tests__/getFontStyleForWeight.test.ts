import { Platform } from 'react-native';
import getFontStyleForWeight from "../getFontStyleForWeight";

const fontFamily = "Arial";
jest.mock('Platform');

// it(`android returns ${fontFamily}-Regular for normal weight`, () => {
//   Platform.OS = 'android';
//   expect(getFontStyleForWeight(fontFamily, "normal"))
//   .toEqual({
//     fontFamily: `${fontFamily}-Regular`,
//     fontWeight: undefined,
//   });
// });

// it(`android returns ${fontFamily}-Bold for bold weight`, () => {
//   Platform.OS = 'android';
//   expect(getFontStyleForWeight(fontFamily, "bold"))
//   .toEqual({
//     fontFamily: `${fontFamily}-Bold`,
//     fontWeight: undefined,
//   });
// });

// it(`android returns ${fontFamily}-Thin for 100 weight`, () => {
//   Platform.OS = 'android';
//   expect(getFontStyleForWeight(fontFamily, "100"))
//   .toEqual({
//     fontFamily: `${fontFamily}-Thin`,
//     fontWeight: undefined,
//   });
// });

// it(`android returns ${fontFamily}-ExtraLight for 200 weight`, () => {
//   Platform.OS = 'android';
//   expect(getFontStyleForWeight(fontFamily, "200"))
//   .toEqual({
//     fontFamily: `${fontFamily}-ExtraLight`,
//     fontWeight: undefined,
//   });
// });

// it(`android returns ${fontFamily}-Light for 300 weight`, () => {
//   Platform.OS = 'android';
//   expect(getFontStyleForWeight(fontFamily, "300"))
//   .toEqual({
//     fontFamily: `${fontFamily}-Light`,
//     fontWeight: undefined,
//   });
// });

it(`android returns ${fontFamily}-Regular for 400 weight`, () => {
  Platform.OS = 'android';
  expect(getFontStyleForWeight(fontFamily, "400"))
  .toEqual({
    fontFamily: `${fontFamily}-Regular`,
    fontWeight: undefined,
  });
});

it(`android returns ${fontFamily}-Medium for 500 weight`, () => {
  Platform.OS = 'android';
  expect(getFontStyleForWeight(fontFamily, "500"))
  .toEqual({
    fontFamily: `${fontFamily}-Medium`,
    fontWeight: undefined,
  });
});

it(`android returns ${fontFamily}-SemiBold for 600 weight`, () => {
  Platform.OS = 'android';
  expect(getFontStyleForWeight(fontFamily, "600"))
  .toEqual({
    fontFamily: `${fontFamily}-SemiBold`,
    fontWeight: undefined,
  });
});

it(`android returns ${fontFamily}-Bold for 700 weight`, () => {
  Platform.OS = 'android';
  expect(getFontStyleForWeight(fontFamily, "700"))
  .toEqual({
    fontFamily: `${fontFamily}-Bold`,
    fontWeight: undefined,
  });
});

it(`android returns ${fontFamily}-ExtraBold for 800 weight`, () => {
  Platform.OS = 'android';
  expect(getFontStyleForWeight(fontFamily, "800"))
  .toEqual({
    fontFamily: `${fontFamily}-ExtraBold`,
    fontWeight: undefined,
  });
});

it(`android returns ${fontFamily}-Black for 900`, () => {
  Platform.OS = 'android';
  expect(getFontStyleForWeight(fontFamily, "900"))
  .toEqual({
    fontFamily: `${fontFamily}-Black`,
    fontWeight: undefined,
  });
});

it(`android returns ${fontFamily}-Regular for font family & undefined weight`, () => {
  Platform.OS = 'android';
  expect(getFontStyleForWeight(fontFamily))
  .toEqual({
    fontFamily: `${fontFamily}-Regular`,
    fontWeight: undefined,
  });
});

it(`android returns empty object if font family & weight both undefined`, () => {
  Platform.OS = 'android';
  expect(getFontStyleForWeight())
  .toEqual({});
});

it("ios returns same font family and weight as provided", () => {
  Platform.OS = 'ios';
  expect(getFontStyleForWeight(fontFamily, "normal"))
  .toEqual({
    fontFamily,
    fontWeight: "normal",
  });
});

it("ios returns fontFamily and weight for 900", () => {
  Platform.OS = 'ios';
  expect(getFontStyleForWeight(fontFamily, "900"))
  .toEqual({
    fontFamily,
    fontWeight: "900",
  });
});
