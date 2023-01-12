import styled from "styled-components";

export const ClockContainer = styled.div`
  background-color: ${({ theme }) => theme.color.ceruleanBlue};
  padding: 5px;
  margin: auto;
  margin-top: 5px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  width: 400px;
`;
