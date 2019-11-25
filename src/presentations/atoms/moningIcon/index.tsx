import * as React from "react";

import { Outer, HillBottom, HillTop } from "./element";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";

interface Props {
  fontSize?: number;
  backgroundColor?: string;
  color?: string;
}
export const MorningIcon: React.FC<Props> = (props: Props) => {
  return (
    <Outer {...props}>
      <HillBottom {...props} />
      <HillTop {...props} />
      <WbSunnyOutlinedIcon fontSize={"inherit"} />
    </Outer>
  );
};
