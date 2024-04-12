import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import HeatMap from '@ncuhomeclub/react-native-heatmap';
import type { ColorProps } from '@ncuhomeclub/react-native-heatmap';

const color: ColorProps = {
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
};
export default function App() {
  const data = [
    12, 423, 42, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 34, 35, 34, 23, 23, 35, 34, 10,
    2, 4, 6, 2, 5, 0, 0,
  ];
  return (
    <View style={styles.container}>
      <HeatMap
        data={data}
        color={color}
        xNumber={30}
        yNumber={8}
        direction="horizontal"
        shape="circle"
      ></HeatMap>
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
