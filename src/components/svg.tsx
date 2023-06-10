interface Props {
  svgPath: string;
}

function Svg(props: Props) {
  const { svgPath } = props;
  return (
    <div>
      <div className="arrowBox">
        <img src={svgPath} alt={svgPath} />
      </div>
    </div>
  );
}

export default Svg;
