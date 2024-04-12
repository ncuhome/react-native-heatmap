export const generateRandomArray = (xSize: number, ySize:number, max: number): number[][] => {
  const array: number[][] = [];
  for (let i = 0; i < xSize; i++) {
    array[i] = [];
    for (let j = 0; j < ySize; j++) {
      //@ts-ignore
      array[i][j] = Math.floor(Math.random() * max);
    }
  }
  return array;
}