import * as React from "react";

import { Outer, HillBottom, HillTop } from "./element";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";

interface Props {
  fontSize?: number;
}
export const MorningIcon: React.FC<Props> = (props: Props) => {
  return (
    <Outer fontSize={props.fontSize}>
      <HillBottom fontSize={props.fontSize} />
      <HillTop fontSize={props.fontSize} />
      <WbSunnyOutlinedIcon fontSize={"inherit"} />
    </Outer>
  );
};
