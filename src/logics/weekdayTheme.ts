import { DateTime } from "luxon";
import { blue, red, grey } from "@material-ui/core/colors";
import { createMuiTheme, Theme } from "@material-ui/core/styles";

export const getWeekdayTheme = (
  baseTheme: Theme,
  dateTime: DateTime,
  isHoliday: boolean
): Theme => {
  const isRed = isHoliday || dateTime.weekday === 7;
  const isBlue = dateTime.weekday === 6;
  if (isRed) {
    return createMuiTheme({
      ...baseTheme,
      palette: {
        // primary: blue
        primary: {
          main: red[700],
          light: red[400]
        }
      }
    });
  } else if (isBlue) {
    return createMuiTheme({
      ...baseTheme,
      palette: {
        // primary: blue
        primary: {
          main: blue[700],
          light: blue[400]
        }
      }
    });
  } else {
    return createMuiTheme({
      ...baseTheme,
      palette: {
        // primary: blue
        primary: {
          main: grey[700],
          light: grey[200],
          contrastText: grey[700]
        }
      }
    });
  }
};
