import * as React from "react";
import { render } from "react-dom";

import { MuiThemeProvider } from "@material-ui/core/styles";

import { defaultTheme } from "./presentations/utils/theme";

import { DailyArticleCard } from "./presentations/molecules/dailyArticleCards";

import SampleChart from "./presentations/molecules/dounutChartTest";

import "./styles.css";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={defaultTheme}>
          <h1>Hello CodeSandbox</h1>
          <DailyArticleCard />
          <SampleChart
            {...{ onedaySpendingData: { expense: 400, usageLimit: 1000 } }}
          />
          <SampleChart
            {...{ onedaySpendingData: { expense: 1000, usageLimit: 1000 } }}
          />
          <SampleChart
            {...{ onedaySpendingData: { expense: 0, usageLimit: 1000 } }}
          />
          <SampleChart
            {...{ onedaySpendingData: { expense: 5100, usageLimit: 1000 } }}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
