import * as React from "react";

import { DateTime } from "luxon";
import { DateStringOuter } from "./element";

interface DateStringProps {
  dateTime: DateTime;
  isHoliday: boolean;
}

export const DateString = (props: DateStringProps) => {
  const { dateTime } = props;
  const jaDateString = dateTime
    .setLocale("ja")
    .toLocaleString(DateTime.DATETIME_HUGE);
  const result = jaDateString.match(/\D(?=曜日)/);
  return (
    <>
      <DateStringOuter {...props}>{`${dateTime.month}/${
        dateTime.day
      }\n(${result})`}</DateStringOuter>
    </>
  );
};
