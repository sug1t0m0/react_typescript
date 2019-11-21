import * as React from "react";
import { render } from "react-dom";

import { TestText } from "./presentations/atoms/testText";
import NestedGrid from "./presentations/molecules/articleCard";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TestText>ああああ</TestText>
      <NestedGrid />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
