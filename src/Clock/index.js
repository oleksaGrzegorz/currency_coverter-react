import { ClockContainer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const date = useCurrentDate();

  return (
    <ClockContainer>
      {date}
    </ClockContainer>
  );
};

export default Clock;
