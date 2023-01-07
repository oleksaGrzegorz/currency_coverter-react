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
  color: #2c3e50;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  background-color: #2c3e50;
  color: white;
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
  background-color: #2c3e50;
  color: white;
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
  background-color: white;
`;

export const FormFieldInput = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 300px;
  height: 50px;
  background-color: white;
`;