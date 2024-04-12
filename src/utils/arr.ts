//对指定arr渲染成二位列表

//一个确定数量的数组
type FixedLengthArray<T extends number[]> = {
  [K in keyof T]: T[K];
};

export type Matrix<T extends number[]> = FixedLengthArray<T>[];

export const arrToMatrix = <T extends number[]>(
  arr: number[],
  xNumber: number,
  yNumber: number
): Matrix<T> => {
  let matrix: Matrix<T> = [] as Matrix<T>;
  //截取arr尾部 xNumber * yNumber个数据
  const arrLength = arr.length;
  const length = xNumber * yNumber;
  const startIndex = arrLength - length;
  if (startIndex > 0) {
    arr = arr.slice(startIndex);
  }

  for (let i = 0; i < xNumber; i++) {
    matrix[i] = [0] as T;
    for (let j = 0; j < yNumber; j++) {
      if (arr[i * yNumber + j] === undefined) {
        //@ts-ignore
        matrix[i][j] = 0;
        continue;
      } else {
        //@ts-ignore
        matrix[i][j] = arr[i * yNumber + j];
      }
    }
  }
  return matrix;
};

export const generateRandomArray = (
  xSize: number,
  ySize: number,
  max: number
): number[] => {
  let array: number[] = [];
  const length = xSize * ySize;
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * max);
  }
  return array;
};
