import { useRef, useState } from "react";

import arrow from "./assets/arrow.svg";
import Button from "./components/button";
import ErrorMessage from "./components/errorMessage";
import Loading from "./components/loading";
import Svg from "./components/svg";
import Title from "./components/title";
import TranslatedText from "./components/translatedText";
import "./css/App.css";

interface ResponseData {
  inputText: string;
  outputText: string;
}

function App() {
  const inputText = useRef<HTMLInputElement>(null);
  const [displayText, setDisplayText] = useState<string>("");
  const [errorHidden, setErrorHidden] = useState<string>("hidden");
  const [loadingHidden, setLoadingHidden] = useState<string>("hidden");
  const translate = async (): Promise<void> => {
    // displayText初期化
    setDisplayText("");
    // テキストが入力されなかった場合、処理終了
    if (inputText.current?.value === "") {
      setErrorHidden("");
      return;
    }
    if (inputText.current === null) return;
    // loading表示
    setLoadingHidden("");
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
    setErrorHidden("hidden");
    // loading非表示
    setLoadingHidden("hidden");
  };

  return (
    <div className="App">
      <div className="container">
        <Title titleName="翻訳サイト" />
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
        <ErrorMessage hidden={errorHidden} />
        <Button buttonClick={translate} />
        <Svg svgPath={arrow} />
        <Loading hidden={loadingHidden} />
        <TranslatedText displayText={displayText} />
      </div>
    </div>
  );
}

export default App;
