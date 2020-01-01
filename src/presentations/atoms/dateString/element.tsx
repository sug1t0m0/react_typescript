import styled from "styled-components";
import { DateTime } from "luxon";

interface DateStringProps {
  dateTime: DateTime;
  isHoliday: boolean;
}
export const DateStringOuter = styled.span`
  display: flex;
  color: ${(props: DateStringProps) => {
    const isRed = props.isHoliday || props.dateTime.weekday === 7;
    const isBlue = props.dateTime.weekday === 6;
    if (isRed) {
      return "#ff0000";
    } else if (isBlue) {
      return "#0000ff";
    } else {
      return "#000000";
    }
  }};
`;
