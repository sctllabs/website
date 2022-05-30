type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>;

declare module '*.svg' {
  const Url: string;
  const ReactComponent: SvgrComponent;

  export { ReactComponent };
  export default Url;
}
