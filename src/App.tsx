import { useRef, useState } from "react";

import "./App.css";
import arrow from "./assets/arrow.svg";

interface ResponseData {
  inputText: string;
  outputText: string;
}

function App() {
  const inputText = useRef<HTMLInputElement>(null);
  const [displayText, setDisplayText] = useState<string>("");
  const [hidden, setHidden] = useState<string>("hidden");
  const translate = async (): Promise<void> => {
    // displayText初期化
    setDisplayText("");
    // テキストが入力されなかった場合、処理終了
    if (inputText.current?.value === "") {
      setHidden("");
      return;
    }
    if (inputText.current === null) return;
    // APIGateway呼び出し
    const ResponseData: ResponseData = await (
      await fetch(
        // APIGateway URL
        // 例）https://xxxxx/ステージ名/リソース名?input_text=こんにちは
        `https://g8xgamnui6.execute-api.ap-northeast-1.amazonaws.com/test/translate?input_text=${inputText.current?.value}`
      )
    ).json();
    // 翻訳されたテキストの表示
    setDisplayText(ResponseData.outputText);
    // エラー文削除
    setHidden("hidden");
  };

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
            ref={inputText}
            onFocus={(event) => event.target.select()}
          />
          <div className="inputTextUnderline" />
        </div>
        <div className={hidden}>
          <p className="errorMessage">入力してください！</p>
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
          <p className="translatedText">{displayText}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
