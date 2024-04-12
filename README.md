# react-native-heatmap

A Components of heatmap for react-native ios and android

## Installation

```sh
npm install @ncuhomeclub/react-native-heatmap
```

## Usage

example
![alt text](./markdown/image.png)

```jsx
import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import HeatMap from '@ncuhomeclub/react-native-heatmap';

export default function App() {
  const data = [
    12, 423, 42, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 34, 35, 34, 23, 23, 35, 34, 10,
    2, 4, 6, 2, 5, 0, 0,
  ];
  return (
    <View style={styles.container}>
      <HeatMap data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
```
## Custom
 ### ColorTheme,
 theme is set to the darkest color, and you can set limit and number to set the color for each quantity
 ```
  import type { ColorProps } from '@ncuhomeclub/react-native-heatmap';

  const color:ColorProps = {
  theme: 'blue',
  opacitys: [
      {
        opacity: 0.2,
        limit: 5,
      },
      {
        opacity: 0.4,
        limit: 10,
      },
      {
        opacity: 0.6,
        limit: 15,
      },
      {
        opacity: 0.8,
        limit: 20,
      },
      {
        opacity: 1,
        limit: 25,
    },
    ],
  }
//...
  <HeatMap data={data} color={color} />
 ```
  ### xNumber & yNumber
  you can pass xNumber and yNumber for set this chart's width and height
  ```
  <HeatMap data={data} color={color} xNumber={30} yNumber={8}/>

  ```

  ### direction 
  you can set direction to decide the data flow
  ```
  <HeatMap data={data} color={color} direction='horizontal' />
  ```

  ### shape
  ```
  //set circle shape
  <HeatMap data={data} color={color} direction='horizontal' shape='circle'/>
  ```
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
