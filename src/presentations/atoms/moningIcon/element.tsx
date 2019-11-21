import styled from "styled-components";

export const Outer = styled.div`
  background-color: #f0f0f0;
  color: #000000;
  display: inline-block;
  width: 30px;
  height: 30px;
  font-size: 30px;
  line-height: 30px;
  position: relative;
`;

export const Test = styled.div`
  position: absolute;
  background-color: #000000;
  width: 100%;
  height: 15px;
  z-index: 1;
  left: 0px;
  bottom: 0px;
  border-radius: 50% / 60% 60% 0 0;
`;

export const Test2 = styled.div`
  position: absolute;
  background-color: #f0f0f0;
  width: 100%;
  height: 12px;
  z-index: 1;
  left: 0px;
  bottom: 0px;
  border-radius: 50% / 80% 80% 0 0;
`;
