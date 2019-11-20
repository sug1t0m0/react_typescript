import * as React from "react";

import {CircleImg} from "./element";

interface Props {
  imageUrl: string;
}

export const CircleImage: React.FC<Props> =(props:Props)=>{
  return <CircleImg src={props.imageUrl} />
}
