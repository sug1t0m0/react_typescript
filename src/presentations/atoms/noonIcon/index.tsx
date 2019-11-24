import * as React from "react";

import { Outer } from "./element";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";

interface Props {
  fontSize?: number;
  backgroundColor?: string;
  color?: string;
}
export const NoonIcon: React.FC<Props> = (props: Props) => {
  return (
    <Outer {...props}>
      <WbSunnyOutlinedIcon fontSize={"inherit"} />
    </Outer>
  );
};
