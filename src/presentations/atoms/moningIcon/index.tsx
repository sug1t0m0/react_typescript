import * as React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { Outer, HillBottom, HillTop } from "./element";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";

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
    },
    hillBottom: {
      position: "absolute",
      backgroundColor: theme.palette.primary.contrastText,
      width: "100%",
      height: theme.typography.fontSize / 2 + "px",
      zIndex: 1,
      left: "0px",
      bottom: "0px",
      borderRadius: "50% / 60% 60% 0 0"
    },
    hillTop: {
      position: "absolute",
      backgroundColor: theme.palette.primary.light,
      width: "100%",
      height: theme.typography.fontSize * 0.4 + "px",
      zIndex: 1,
      left: "0px",
      bottom: "0px",
      borderRadius: "50% / 80% 80% 0 0"
    }
  })
);

export const MorningIcon: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = () => {
  const classes = useStyles({});
  return (
    <div className={classes.outer}>
      <div className={classes.hillBottom} />
      <div className={classes.hillTop} />
      <WbSunnyOutlinedIcon fontSize={"inherit"} />
    </div>
  );
};
