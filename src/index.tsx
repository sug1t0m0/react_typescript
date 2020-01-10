import * as React from "react";
import { render } from "react-dom";

import { MuiThemeProvider } from "@material-ui/core/styles";

import { defaultTheme } from "./presentations/utils/theme";

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
        <MuiThemeProvider theme={defaultTheme}>
          <h1>Hello CodeSandbox</h1>
          <DailyArticleCard />
        </MuiThemeProvider>
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
