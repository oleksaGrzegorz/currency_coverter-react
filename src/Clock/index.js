import { ClockContainer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const date = useCurrentDate();

  return (
    <ClockContainer>
      Today is
      {date}
    </ClockContainer>
  );
};

export default Clock;
