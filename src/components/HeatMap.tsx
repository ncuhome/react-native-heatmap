import React, { useMemo } from 'react';
import type { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { arrToMatrix, generateRandomArray } from '../utils/arr';

export interface HeatMapProps {
  direction?: 'horizontal' | 'vertical';
  xLabels?: string[];
  yLabels?: string[];
  xNumber?: number;
  yNumber?: number;
  data: number[];
  color?: ColorProps;
  //形状
  shape?: 'rectangle' | 'circle';
}

export interface OpacityProps {
  opacity: number;
  limit: number;
}

export interface ColorProps {
  theme: string;
  opacitys: OpacityProps[];
}

const defaultColorMap: ColorProps = {
  theme: '#09611F',
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

export const getOpacityByNumber = (
  opacityOption: OpacityProps[],
  number: number
): number => {
  let opacity;
  if (opacityOption.length === 0) {
    return 1;
  }
  if (number <= 0) {
    return 0.1;
  }

  for (let i = 0; i < opacityOption.length; i++) {
    //@ts-ignore
    if (number > opacityOption[i].limit) {
      //@ts-ignore
      opacity = opacityOption[i].opacity;
    } else {
      break;
    }
  }
  return opacity ? opacity : 0.2;
};

/**
 * @description 默认方向为水平方向
 */
//热度图view
const HeatMap: FC<HeatMapProps> = ({
  direction = 'vertical',
  yNumber = 8,
  xNumber = 30,
  data = generateRandomArray(xNumber, yNumber, 50),
  color = defaultColorMap,
  shape = 'rectangle',
}) => {
  if (!data || data.length === 0) {
    throw Error('请传入正确的数据');
  }
  const dataArr = useMemo(() => {
    if (direction === 'vertical') {
      return arrToMatrix(data, xNumber, yNumber);
    } else {
      return arrToMatrix(data, yNumber, xNumber);
    }
  }, [data, xNumber, yNumber, direction]);

  const renderMatrix = useMemo(() => {
    if (direction === 'vertical') {
      return (
        <>
          {dataArr.map((dataItem, xIndex) => {
            return (
              <View key={`heatmap-main-${xIndex}`} style={[style.sufBox]}>
                {dataItem.map((item, yIndex) => {
                  return (
                    <View
                      key={`heatmap-suf-${yIndex}`}
                      style={[
                        style.itemBox,
                        {
                          backgroundColor: item === 0 ? 'gray' : color.theme,
                          opacity: getOpacityByNumber(color.opacitys, item),
                        },
                      ]}
                    />
                  );
                })}
              </View>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          {dataArr.map((dataItem, xIndex) => {
            return (
              <View
                key={`heatmap-main-${xIndex}`}
                style={[style.sufBoxHorizontal]}
              >
                {dataItem.map((item, yIndex) => {
                  return (
                    <View
                      key={`heatmap-suf-${yIndex}`}
                      style={[
                        style.itemBox,
                        {
                          backgroundColor: item === 0 ? 'gray' : color.theme,
                          opacity: getOpacityByNumber(color.opacitys, item),
                          borderRadius: shape === 'circle' ? 5 : 0,
                        },
                      ]}
                    />
                  );
                })}
              </View>
            );
          })}
        </>
      );
    }
  }, [color, dataArr, direction]);
  return (
    <View
      style={[
        direction === 'vertical' ? style.mainBox : style.mainBoxHorizontal,
        {
          width:
            direction === 'vertical'
              ? 11 * dataArr.length
              : //@ts-ignore
                11 * dataArr[0].length,

          height:
            direction === 'vertical'
              ? //@ts-ignore
                11 * (dataArr[0].length as number)
              : 11 * dataArr.length,
        },
      ]}
    >
      {renderMatrix}
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
  mainBoxHorizontal: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 1,
    columnGap: 1,
  },
  sufBoxHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    rowGap: 1,
    columnGap: 1,
  },
});
