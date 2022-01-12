import { shade } from "polished";
import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 100px 100px;
`;

export const Input = styled.input`
  background: rgb(255, 255, 255);
  border: 2px solid transparent;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px inset;
  border-radius: 6px;
  padding: 14px 16px;
  font-size: 15px;
  outline: none;
  width: 100%;
`;

export const InputPrice = styled.input`
  background: rgb(255, 255, 255);
  border: 0px transparent;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px inset;
  border-radius: 6px;
  padding: 14px 16px;
  font-size: 15px;
  outline: none;
  width: 130px;
`;

export const DataSection = styled.section`
  font-size: 30px;

  input {
    font-size: 18pt;
    min-width: 100px;
  }
`;
export const Button = styled.button`
  width: 180px;
  margin-top: 100px;
  display: block;
  padding: 10px 10px 10px 10px;
  background-color: #ffffff;
  border-radius: 5px 5px 5px 5px;
  border: 0;
  color: #333333;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, "#FCE0AD")};
  }
  &:active {
    background-color: ${shade(0.2, "#FCE0AD")};
  }
`;

export const Label = styled.label`
  position: static;
  margin-top: 14px;
  margin-right: 5px;
  font-size: 26px;
`;
