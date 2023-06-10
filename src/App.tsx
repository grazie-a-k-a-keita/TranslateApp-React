import "./App.css";
import arrow from "./assets/arrow.svg";

function App() {
  function translate(): void {
    // eslint-disable-next-line no-console
    console.log("Hello world!");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="titleBox">
          <p className="titleText">翻訳サイト</p>
        </div>
        <div className="inputTextBox">
          <input
            type="text"
            className="inputText"
            placeholder="翻訳したい日本語を入力"
          />
          <div className="inputTextUnderline" />
        </div>
        <div className="buttonBox">
          <button type="submit" className="translateButton" onClick={translate}>
            翻訳
          </button>
        </div>
        <div className="arrowBox">
          <img src={arrow} alt="arrow" />
        </div>
        <div className="translatedTextBox">
          <p className="translatedText">
            If the exact weight given is unavailable, then the following rule is
            used to determine the weight actually rendered
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
