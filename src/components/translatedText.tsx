interface Props {
  displayText: string;
}

function TranslatedText(props: Props) {
  const { displayText } = props;
  return (
    <div>
      <div className="translatedTextBox">
        <p className="translatedText">{displayText}</p>
      </div>
    </div>
  );
}

export default TranslatedText;
