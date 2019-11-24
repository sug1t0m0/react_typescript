import * as React from "react";

import { Outer } from "./element";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";

interface Props {
  fontSize?: number;
  backgroundColor?: string;
  color?: string;
}
export const NightIcon: React.FC<Props> = (props: Props) => {
  return (
    <Outer {...props}>
      <NightsStayOutlinedIcon fontSize={"inherit"} />
    </Outer>
  );
};
