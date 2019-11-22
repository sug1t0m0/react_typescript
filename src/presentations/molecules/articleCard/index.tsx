import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import { Outer } from "./element";
import { CircleImage } from "../../atoms/circleImage";
import { MorningIcon } from "../../atoms/moningIcon";

const useStyles = makeStyles(theme => ({
  card: {
    background: "#f0f0f0",
    borderRadius: "10px"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function NestedGrid() {
  const classes = useStyles({});

  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <MorningIcon fontSize={30} />
        </Grid>
        <Grid item xs={4}>
          <MorningIcon fontSize={12} />
        </Grid>
        <Grid item xs={4}>
          <MorningIcon fontSize={40} />
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow() {
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
  }

  return (
    <Outer>
      <Card className={classes.card}>
        <Grid container item xs={12}>
          <FormRow2 />
          <FormRow />
        </Grid>
      </Card>
    </Outer>
  );
}
