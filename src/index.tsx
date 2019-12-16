import * as React from "react";
import { render } from "react-dom";

import { TestText } from "./presentations/atoms/testText";
import { MeasuredComp } from "./presentations/molecules/articleCard";

import { DailyArticleCard } from "./presentations/molecules/dailyArticleCards";

import "./styles.css";

class App extends React.Component<{}, {}> {
  componentDidMount() {
    window.addEventListener("resize", () => {
      const size = this.getWindowSize();
      console.log("your window size", size);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <TestText>ああああ</TestText>
        <MeasuredComp color={"#ffcccc"} />
        <DailyArticleCard />
      </div>
    );
  }

  getWindowSize = () => {
    const e = document.documentElement;
    const g = e.getElementsByTagName("body")[0];
    const w = window.innerWidth || e.clientWidth || g.clientWidth;
    const h = window.innerHeight || e.clientHeight || g.clientHeight;

    return {
      width: w,
      height: h
    };
  };
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
