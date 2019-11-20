import * as React from "react";
import { render } from "react-dom";

import { TestText } from "./presentations/atoms/testText";
import { CircleImage } from "./presentations/atoms/circleImage";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TestText>ああああ</TestText>
      <CircleImage imageUrl={"http://placehold.jp/125x125.png"} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
