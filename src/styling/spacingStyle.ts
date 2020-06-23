export type TSpacingStyle = {
  padding?: string;
  margin?: string;
};

export default function spacingStyle(props: TSpacingStyle) {
  return {
    padding: props.padding,
    margin: props.margin,
  };
}
