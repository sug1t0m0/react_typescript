import * as React from "react";

import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outer: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      display: "inline-block",
      width: theme.typography.fontSize + "px",
      height: theme.typography.fontSize + "px",
      fontSize: theme.typography.fontSize + "px",
      lineHeight: theme.typography.fontSize + "px",
      position: "relative"
    }
  })
);

export const NightIcon: React.FC = () => {
  const classes = useStyles({});

  return (
    <div className={classes.outer}>
      <NightsStayOutlinedIcon fontSize={"inherit"} />
    </div>
  );
};
