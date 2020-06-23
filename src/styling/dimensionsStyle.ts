export type TDimensionsStyle = {
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
};

export default function dimensionsStyle(props: TDimensionsStyle) {
  return {
    height: transformValue(props.height),
    minHeight: transformValue(props.minHeight),
    maxHeight: transformValue(props.maxHeight),
    width: transformValue(props.width),
    minWidth: transformValue(props.minWidth),
    maxWidth: transformValue(props.maxWidth),
  };
}

function transformValue(value?: number | string) {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value === 'number') {
    return `${value * 100}%`;
  }

  return value;
}
