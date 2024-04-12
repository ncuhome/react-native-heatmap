//颜色计算，根据提供的颜色计算其深色和浅色,提供为16进制或者rgb格式

interface RGBProps {
  r: number;
  g: number;
  b: number;
}
const calculateColor = (color: RGBProps, steps: number): RGBProps[] => {
  const gradientColors: RGBProps[] = [];
  for (let i = 0; i < steps; i++) {
    const factor = (steps - i) / (steps);
    gradientColors.push({
      r: Math.min(255, Math.floor(color.r * factor)),
      g: Math.min(255, Math.floor(color.g * factor)),
      b: Math.min(255, Math.floor(color.b * factor)),
    });
  }
  return gradientColors;
};

const changeToHexColor = (color: string): RGBProps => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  if (result == null) {
    throw Error('请输入正确的16进制颜色值');
  }
  let rgbData;
  try {
    rgbData = result
      ? {
          r: parseInt(result[1] as string, 16),
          g: parseInt(result[2] as string, 16),
          b: parseInt(result[3] as string, 16),
        }
      : null;
  } catch (e) {
    throw Error('请输入正确的16进制颜色值');
  }

  if (
    rgbData == null ||
    rgbData.r === undefined ||
    rgbData.g === undefined ||
    rgbData.b === undefined
  ) {
    throw Error('请输入正确的16进制颜色值');
  } else {
    return rgbData;
  }
};

export const renderColors = (color: string | RGBProps, steps = 5) => {
  if (typeof color === 'string') {
    color = changeToHexColor(color);
  }
  return calculateColor(color, steps);
};
