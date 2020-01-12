import * as React from "react";

import { DateTime } from "luxon";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  dateString: {
    color: theme.palette.primary.contrastText
  }
}));

interface DateStringProps {
  dateTime: DateTime;
  isHoliday: boolean;
}

export const DateString = (props: DateStringProps) => {
  const classes = useStyles({});
  const { dateTime } = props;
  const jaDateString = dateTime
    .setLocale("ja")
    .toLocaleString(DateTime.DATETIME_HUGE);
  const result = jaDateString.match(/\D(?=曜日)/);
  return (
    <span className={classes.dateString}>{`${dateTime.month}/${
      dateTime.day
    }(${result})`}</span>
  );
};
