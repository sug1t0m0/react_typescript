import * as React from "react";

import { DateTime } from "luxon";
import * as JapaneseHolidays from "japanese-holidays";

import { DateString } from "../../atoms/dateString";

export const DateStringTest = () => {
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
          return <DateString {...{ isHoliday, dateTime }} />;
        })}
    </>
  );
};
