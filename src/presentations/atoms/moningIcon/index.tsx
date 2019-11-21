import * as React from "react";

import { Outer, Test, Test2 } from "./element";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";

interface Props {}
export const MorningIcon: React.FC<Props> = (props: Props) => {
  return (
    <Outer>
      <Test />
      <Test2 />
      <WbSunnyOutlinedIcon fontSize={"inherit"} />
    </Outer>
  );
};
