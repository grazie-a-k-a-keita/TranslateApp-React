interface Props {
  buttonClick(): void;
}

function Button(props: Props) {
  const { buttonClick } = props;
  return (
    <div>
      <div className="buttonBox">
        <button type="button" className="translateButton" onClick={buttonClick}>
          翻訳
        </button>
      </div>
    </div>
  );
}

export default Button;
