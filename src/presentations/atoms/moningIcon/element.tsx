import styled from "styled-components";

interface OuterProps {
  fontSize?: number;
  backgroundColor?: string;
  color?: string;
}

export const Outer = styled.div`
  background-color: ${(props:OuterProps) => props.backgroundColor || "#ffffff"};
  color: ${(props:OuterProps) => props.color || "#000000"};
  display: inline-block;
  width:${(props:OuterProps) => (props.fontSize || 24) + "px"};
  height: ${(props:OuterProps) => (props.fontSize || 24) + "px"};
  font-size: ${(props:OuterProps) => (props.fontSize || 24) + "px"};
  line-height: ${(props:OuterProps) => (props.fontSize || 24) + "px"};
  position: relative;
`;

export const HillBottom = styled.div`
  position: absolute;
  background-color: ${(props:OuterProps) => props.color || "#000000"};
  width: 100%;
  height: ${(props:OuterProps) => (props.fontSize || 24) / 2 + "px"};
  z-index: 1;
  left: 0px;
  bottom: 0px;
  border-radius: 50% / 60% 60% 0 0;
`;

export const HillTop = styled.div`
  position: absolute;
  background-color: ${(props:OuterProps) => props.backgroundColor || "#ffffff"};
  width: 100%;
  height: ${(props:OuterProps) => (props.fontSize || 24) *0.4 + "px"};;
  z-index: 1;
  left: 0px;
  bottom: 0px;
  border-radius: 50% / 80% 80% 0 0;
`;
