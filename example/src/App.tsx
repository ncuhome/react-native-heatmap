import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import HeatMap from 'react-native-heatmap';

export default function App() {
  const data = [
    [1, 23, 0],
    [2, 10, 65],
    [20, 50, 43],
  ];
  return (
    <View style={styles.container}>
      <HeatMap data={data} xNumber={2} yNumber={3} />
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
