import styled from "styled-components";

interface BadgeAdjusterProps {
  size: {
    width: number;
    height: number;
  };
}

export const Outer = styled.div`
  justify-content: center;
  position: relative;
  display: inline-block;
  width: 90%;
  padding: 20px 0;
`;

export const BackgroundLineMiddle = styled.div`
  position: absolute;
  top: 15px;
  left: 40%;
  height: calc(100% - 20px);
  width: 20%;
  background-color: #cccccc;
  z-index: -1;
`;

export const BackgroundLineTop = styled.div`
  position: absolute;
  top: 0;
  left: 40%;
  border-right: ${(props: BadgeAdjusterProps) =>
    (props.size.width * 0.2) / 2 + "px solid #cccccc"};
  border-bottom: 0px solid #cccccc;
  border-left: ${(props: BadgeAdjusterProps) =>
    (props.size.width * 0.2) / 2 + "px solid #cccccc"};
  border-top: 15px solid transparent;
  z-index: -1;
`;

export const BackgroundLineEnd = styled.div`
  position: absolute;
  top: ${(props: BadgeAdjusterProps) => props.size.height + 40 - 5 + "px"};
  left: 40%;
  border-right: ${(props: BadgeAdjusterProps) =>
    (props.size.width * 0.2) / 2 + "px solid transparent"};
  border-top: 15px solid #cccccc;
  border-left: ${(props: BadgeAdjusterProps) =>
    (props.size.width * 0.2) / 2 + "px solid transparent"};
  z-index: -1;
`;

export const IconOuter = styled.div`
  margin-top: 10px;
  padding: 5px 0 0 0;
`;

export const BadgeAdjuster = styled.div`
  position: absolute;
  background-color: transparent;
  width: ${(props: BadgeAdjusterProps) =>
    props.size.width - (props.size.height / 4) * 1 + "px"};
  height: ${(props: BadgeAdjusterProps) => props.size.height + "px"};
  top: 20;
  left: 0;
`;

export const BadgeAdjusterInner = styled.div`
  /* position: absolute; */
  background-color: transparent;
  width: ${(props: BadgeAdjusterProps) =>
    props.size.width - (props.size.height / 4) * 1 + "px"};
  height: ${(props: BadgeAdjusterProps) => props.size.height + "px"};
  display: transparent;
`;

export const MeasureOuter = styled.div``;
