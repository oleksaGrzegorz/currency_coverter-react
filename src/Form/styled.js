import styled from "styled-components";
import img from "./background.jpg";

export const MainForm = styled.form`
  width: 800px;
  border-radius: 10px;
  padding: 10px;
  background-image: url(${img});
  border-style: double;
`;

export const LabelText = styled.span`
  width: 100px;
  display: inline-block;
`;

export const FormResult = styled.strong`
  color: ${({ theme }) => theme.color.black};
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.color.ceruleanBlue};
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: hsl(210, 29%, 17%);
    cursor: pointer;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  border-radius: 5px;
`;

export const Legend = styled.legend`
  background-color: ${({ theme }) => theme.color.ceruleanBlue};
  color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  text-align: center;
`;

export const FormFieldSelect = styled.select`
  padding: 10px;
  width: 100%;
  max-width: 300px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const FormFieldInput = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 300px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const Loading = styled.h1`
  text-align: center;
`;

export const Error = styled.h1`
  text-align: center;
`;
