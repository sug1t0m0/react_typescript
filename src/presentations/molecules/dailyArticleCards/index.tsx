import * as React from "react";

import { DateTime } from "luxon";
import * as JapaneseHolidays from "japanese-holidays";

import { Outer, Left, Right } from "./element";

import { DateString } from "../../atoms/dateString";
import { MeasuredComp } from "../../molecules/articleCard";

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
          const dateTime = baseDateTime.plus({ days: index });
          const isHoliday = !!JapaneseHolidays.isHoliday(dateTime.toJSDate());
          return (
            <Outer>
              <Left>
                <DateString {...{ isHoliday, dateTime }} />
              </Left>
              <Right>
                <MeasuredComp color={"#ffcccc"} />
              </Right>
            </Outer>
          );
        })}
    </>
  );
};
