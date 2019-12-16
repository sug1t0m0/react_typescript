import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import Measure from "react-measure";

import {
  Outer,
  IconOuter,
  BadgeAdjuster,
  BadgeAdjusterInner,
  MeasureOuter,
  BackgroundLine
} from "./element";
import { CircleImage } from "../../atoms/circleImage";
import { MorningIcon } from "../../atoms/moningIcon";
import { NoonIcon } from "../../atoms/noonIcon";
import { NightIcon } from "../../atoms/nightIcon";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  },
  card: (props: Props) => {
    const radius = props.size.height / 2;
    return {
      background: props.color,
      borderRadius: `${radius}px / ${radius}px`,
      width: "100%"
    };
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

interface Props {
  size: {
    width: number;
    height: number;
  };
  color: string;
}

const NestedGrid = (props: Props) => {
  const classes = useStyles(props);

  const IconsRow = () => {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <IconOuter>
            <MorningIcon
              {...{
                fontSize: 20,
                backgroundColor: props.color,
                color: "#000000"
              }}
            />
          </IconOuter>
        </Grid>
        <Grid item xs={4}>
          <IconOuter>
            <NoonIcon
              {...{
                fontSize: 20,
                backgroundColor: props.color,
                color: "#000000"
              }}
            />
          </IconOuter>
        </Grid>

        <Grid item xs={4}>
          <IconOuter>
            <NightIcon
              {...{
                fontSize: 20,
                backgroundColor: props.color,
                color: "#000000"
              }}
            />
          </IconOuter>
        </Grid>
      </React.Fragment>
    );
  };

  const CircleImagesRow = () => {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <CircleImage imageUrl={"http://placehold.jp/125x125.png"} />
        </Grid>
        <Grid item xs={4}>
          <CircleImage imageUrl={"http://placehold.jp/125x125.png"} />
        </Grid>
        <Grid item xs={4}>
          <CircleImage imageUrl={"http://placehold.jp/125x125.png"} />
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <Card className={classes.card}>
      <Grid container item xs={12}>
        <IconsRow />
        <CircleImagesRow />
      </Grid>
    </Card>
  );
};

interface TestComponentProps {
  color: string;
}

interface TestComponentState {
  size: {
    width: number;
    height: number;
  };
}

export class MeasuredComp extends React.Component<
  TestComponentProps,
  TestComponentState
> {
  state = {
    size: {
      width: 0,
      height: 0
    }
  };

  render() {
    return (
      <Outer>
        <BackgroundLine />
        <BadgeAdjuster size={this.state.size}>
          <Badge
            badgeContent={"NEW"}
            anchorOrigin={{
              horizontal: "right",
              vertical: "top"
            }}
            color="secondary"
          >
            <BadgeAdjusterInner size={this.state.size} />
          </Badge>
        </BadgeAdjuster>
        <Measure
          bounds
          onResize={contentRect => {
            console.log({ ...contentRect.bounds });
            const { width, height } = contentRect.bounds;
            const size = {
              width,
              height
            };
            this.setState({ size });
          }}
        >
          {({ measureRef }) => (
            <MeasureOuter ref={measureRef}>
              <NestedGrid {...{ ...this.state, ...this.props }} />
            </MeasureOuter>
          )}
        </Measure>
      </Outer>
    );
  }
}
