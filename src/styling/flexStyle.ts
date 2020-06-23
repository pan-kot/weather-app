export type TFlexStyle = {
  column?: boolean;
};

export default function flexStyle(props: TFlexStyle) {
  return {
    flexColumn: props.column ? 'column' : 'row',
  };
}
