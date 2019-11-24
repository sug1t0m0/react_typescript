import styled from "styled-components";

interface BadgeAdjusterProps {
  size: {
    width: number;
    height: number;
  };
}

export const Outer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const IconOuter = styled.div`
  padding: 5px 0 0 0;
`;

export const BadgeAdjuster = styled.div`
  position: absolute;
  background-color: transparent;
  width: ${(props: BadgeAdjusterProps) =>
    props.size.width - (props.size.height / 4) * 1 + "px"};
  height: ${(props: BadgeAdjusterProps) => props.size.height + "px"};
  top: 0;
  left: 0;
`;

export const BadgeAdjusterInner = styled.div`
  /* position: absolute; */
  background-color: transparent;
  width: ${(props: BadgeAdjusterProps) =>
    props.size.width - (props.size.height / 4) * 1 + "px"};
  height: ${(props: BadgeAdjusterProps) => props.size.height + "px"};
`;

export const MeasureOuter = styled.div`
  display: inline-block;
`;
