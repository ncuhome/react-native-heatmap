import React from 'react';
import type { FC } from 'react';
import { View, StyleSheet } from 'react-native';

export interface HeatMapProps {
  direction?: 'horizontal' | 'vertical';
  xLabels?: string[];
  yLabels?: string[];
  xNumber?: number;
  yNumber?: number;
  headMockData?: number[][];
}
//随机生成0-50的数字
const headMockData = [
  [8, 78, 45, 76, 0, 45, 34, 21],
  [12, 45, 78, 23, 56, 23, 78, 45],
];

const colorMap = {};

/**
 * @description 默认方向为水平方向
 */
//热度图view
const HeatMap: FC<HeatMapProps> = ({
  direction = 'horizontal',
  yNumber = 8,
  xNumber = 30,
}) => {
  return (
    <View
      style={{
        ...style.mainBox,
        width: 11 * xNumber,
        height: 11 * yNumber,
      }}
    >
      {Array.from({ length: xNumber }).map((_, xIndex) => {
        return (
          <View key={`heatmap-main-${xIndex}`} style={style.sufBox}>
            {Array.from({ length: yNumber }).map((_, yIndex) => (
              <View key={`heatmap-suf-${yIndex}`} style={style.itemBox} />
            ))}
          </View>
        );
      })}
    </View>
  );
};

export default HeatMap;

const style = StyleSheet.create({
  mainBox: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 1,
    rowGap: 1,
  },
  sufBox: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    rowGap: 1,
    columnGap: 1,
  },
  itemBox: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
  },
});
