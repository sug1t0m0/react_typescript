import * as React from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import Measure from "react-measure";
import { DateTime } from "luxon";

import {
  Outer,
  BadgeAdjuster,
  BadgeAdjusterInner,
  MeasureOuter,
  BackgroundLine
} from "./element";
import { CircleImage } from "../../atoms/circleImage";
import { MorningIcon } from "../../atoms/moningIcon";
import { NoonIcon } from "../../atoms/noonIcon";
import { NightIcon } from "../../atoms/nightIcon";
import { DateString } from "../../atoms/dateString";

const { useState } = React;

const useStyles = makeStyles((theme: Theme) => ({
  card: (props: Props) => {
    const radius = props.size.height / 2;
    return {
      background: theme.palette.primary.light,
      borderRadius: `${radius}px / ${radius}px`,
      width: "100%",
      padding: "5px 0"
    };
  },
  icon: {
    marginTop: "10px"
  },
  dateString: {
    display: "flex",
    justifyContent: "center"
  }
}));

interface Props {
  size: {
    width: number;
    height: number;
  };
  dateTime: DateTime;
  isHoliday: boolean;
}

const NestedGrid = (props: Props) => {
  const classes = useStyles(props);

  const IconsRow = () => {
    return (
      <>
        <Grid item xs={4} className={classes.icon}>
          <MorningIcon />
        </Grid>
        <Grid item xs={4} className={classes.icon}>
          <NoonIcon />
        </Grid>
        <Grid item xs={4} className={classes.icon}>
          <NightIcon />
        </Grid>
      </>
    );
  };

  const CircleImagesRow = () => {
    return (
      <>
        <Grid item xs={4}>
          <CircleImage imageUrl={"http://placehold.jp/125x125.png"} />
        </Grid>
        <Grid item xs={4}>
          <CircleImage imageUrl={"http://placehold.jp/125x125.png"} />
        </Grid>
        <Grid item xs={4}>
          <CircleImage imageUrl={"http://placehold.jp/125x125.png"} />
        </Grid>
      </>
    );
  };

  return (
    <Card className={classes.card}>
      <Grid container item xs={12}>
        <Grid item xs={12} className={classes.dateString}>
          <DateString {...props} />
        </Grid>
        <IconsRow />
        <CircleImagesRow />
      </Grid>
    </Card>
  );
};

interface ArticleCardProps {
  dateTime: DateTime;
  isHoliday: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = props => {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  return (
    <Outer>
      <BackgroundLine />
      <BadgeAdjuster size={size}>
        <Badge
          badgeContent={"NEW"}
          anchorOrigin={{
            horizontal: "right",
            vertical: "top"
          }}
          color="secondary"
        >
          <BadgeAdjusterInner size={size} />
        </Badge>
      </BadgeAdjuster>
      <Measure
        bounds
        onResize={contentRect => {
          const { width, height } = contentRect.bounds;
          const size = {
            width,
            height
          };
          setSize({ ...size });
        }}
      >
        {({ measureRef }) => (
          <MeasureOuter ref={measureRef}>
            <NestedGrid {...{ ...props, size }} />
          </MeasureOuter>
        )}
      </Measure>
    </Outer>
  );
};
