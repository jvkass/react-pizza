import { shade } from "polished";
import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 500px 500px;
  align-items: flex-start;
  float: left;
`;

export const Order = styled.section`
  margin: auto;
`;

export const Button = styled.button`
  max-width: 400px;
  max-height: 60px;
  display: block;
  padding: 10px 10px 10px 10px;
  background-color: #ffffff;
  border-radius: 5px 5px 5px 5px;
  border: 0;
  color: #333333;
  text-align: left;
  transition: background-color 0.2s;
  font-size: 36px;

  &:hover {
    background-color: ${shade(0.2, "#FCE0AD")};
    font-weight: bold;
  }
  &:active {
    background-color: ${shade(0.2, "#FCE0AD")};
    font-weight: bold;
  }
`;
