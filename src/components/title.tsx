interface Props {
  titleName: string;
}

function Title(props: Props) {
  const { titleName } = props;
  return (
    <div>
      <div className="titleBox">
        <p className="titleText">{titleName}</p>
      </div>
    </div>
  );
}

export default Title;
