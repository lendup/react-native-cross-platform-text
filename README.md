# react-native-cross-platform-text

[![codecov](https://codecov.io/gh/lendup/react-native-cross-platform-text/branch/master/graph/badge.svg?token=WX4zNL7EPX)](https://codecov.io/gh/lendup/react-native-cross-platform-text)

Crossplatform Text shim, consolidating iOS and Android font weight and font family APIs.

## Installation

```bash
yarn add react-native-cross-platform-text
```

or

```bash
npm install --save react-native-cross-platform-text
```

## Usage

react-native-cross-platform-text exports wrapped React Native Text components and will transform `fontWeight` and `fontFamily` styles so they are compatible with Android's API:


```js
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, AnimatedText } from 'react-native-cross-platform-text';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
  }
  textInput: {
    fontFamily: 'TittiliumWeb',
    fontWeight: '900',
  },
  animatedText: {
    fontFamily: 'Montessart',
    fontWeight: undefined
  }
});

const example = () => (
  <View>
    <Text style={styles.text}>Crossplatform text component!</Text>
    <TextInput style={styles.textInput} />
    <AnimatedText style={styles.animatedText}>Crossplatform animated text component!</AnimatedText>
  </View>
);
```

On iOS, styles stay the same, on Android they become:
```js
text: {
  fontFamily: 'OpenSans-Bold',
  fontWeight: undefined,
}
textInput: {
  fontFamily: 'TittiliumWeb-Black',
  fontWeight: undefined,
}
animatedText: {
  fontFamily: 'Montessart-Regular',
  fontWeight: undefined,
}
```

To get the most out of this library, please ensure your custom font files are correctly imported and that they follow these naming conventions, i.e.:

```
MyFont-Regular.ttf
MyFont-Bold.ttf
MyFont-Thin.ttf
MyFont-ExtraLight.ttf
MyFont-Medium.ttf
MyFont-SemiBold.ttf
MyFont-Bold.ttf
MyFont-ExtraBold.ttf
MyFont-Black.ttf
```

as this is how the [library](https://github.com/lendup/react-native-cross-platform-text/blob/master/src/getFontStyleForWeight.ts) will map font weights.


