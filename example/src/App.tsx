import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import HeatMap from 'react-native-heatmap';

export default function App() {
  const data = [12,423,42,0,0,0,0,23]
  return (
    <View style={styles.container}>
      <HeatMap data={data}/>
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
