import styled from "styled-components";

export const MainFooter = styled.footer`
  color: ${({ theme }) => theme.color.white};
  text-align: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    color: #f1c40f;
  }
`;

export const Container = styled.div`
  font-size: 10px;
  background-color: ${({ theme }) => theme.color.black};
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
`;
