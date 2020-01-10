import * as React from "react";
import { render } from "react-dom";

import { MuiThemeProvider } from "@material-ui/core/styles";

import { defaultTheme } from "./presentations/utils/theme";

import { DailyArticleCard } from "./presentations/molecules/dailyArticleCards";

import "./styles.css";

class App extends React.Component<{}, {}> {
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
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
