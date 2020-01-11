import * as React from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { getWeekdayTheme } from "../../../logics/weekdayTheme";

import { DateTime } from "luxon";
import * as JapaneseHolidays from "japanese-holidays";

import { ArticleCard } from "../../molecules/articleCard";
import { defaultTheme } from "../../utils/theme";

export const DailyArticleCard = () => {
  return (
    <>
      {new Array(7)
        .fill(
          DateTime.local()
            .setZone("Asia/Tokyo")
            .minus({ days: DateTime.local().setZone("Asia/Tokyo").weekday })
        )
        .map((baseDateTime, index) => {
          const dateTime = baseDateTime.plus({ days: index + 1 });
          const isHoliday = !!JapaneseHolidays.isHoliday(dateTime.toJSDate());

          const theme = getWeekdayTheme(defaultTheme, dateTime, isHoliday);

          return (
            <MuiThemeProvider theme={theme} key={index}>
              <ArticleCard {...{ dateTime, isHoliday }} />
            </MuiThemeProvider>
          );
        })}
    </>
  );
};
