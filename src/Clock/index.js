import { ClockContainer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) => date.toLocaleString(undefined, {
  weekday: "long",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const Clock = () => {
  const date = useCurrentDate();

  return (
    <ClockContainer>
      {formatDate(date)}
    </ClockContainer>
  );
};

export default Clock;
