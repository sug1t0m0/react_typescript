import styled from "styled-components";

interface OuterProps {
  fontSize?: number;
  backgroundColor?: string;
  color?: string;
}

export const Outer = styled.div`
  background-color: ${(props: OuterProps) =>
    props.backgroundColor || "#ffffff"};
  color: ${(props: OuterProps) => props.color || "#000000"};
  display: inline-block;
  width: ${(props: OuterProps) => (props.fontSize || 24) + "px"};
  height: ${(props: OuterProps) => (props.fontSize || 24) + "px"};
  font-size: ${(props: OuterProps) => (props.fontSize || 24) + "px"};
  line-height: ${(props: OuterProps) => (props.fontSize || 24) + "px"};
  position: relative;
`;
