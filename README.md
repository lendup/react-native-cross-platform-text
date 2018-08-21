# react-native-cross-platform-text

Crossplatform Text shim, consolidating iOS and Android font weight and font family APIs.

## Installation

```bash
yarn add react-native-crossplatform-text
```

or

```bash
npm install --save react-native-crossplatform-text
```

## Usage

react-native-cross-platform-text exports wrapped React Native Text components and will transform `fontWeight` and `fontFamily` styles so they are compatible with Android's API:


```js
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, AnimatedText } from 'react-native-crossplatform-text';

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

To get the most out of this library, please ensure your custom fonts are correctly imported, and follow the naming conventions as they have been declared in *FILE LINK*.

