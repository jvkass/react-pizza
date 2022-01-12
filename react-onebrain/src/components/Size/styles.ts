import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export const SizeSection = styled.section`
  display: grid;
  grid-template-columns: 100px 150px 150px;
  float: right;
`;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonSize: "P" | "M" | "G" | undefined;
}

const buttonVariations = {
  P: css`
    width: 50px;
    height: 50px;
  `,
  M: css`
    width: 100px;
    height: 100px;
  `,
  G: css`
    width: 150px;
    height: 150px;
  `,
  "": css``,
};

export const ButtonSize = styled.button`
  background: #ffffff;
  border-radius: 100%;
  border-color: #000000;
  font-size: 40px;
  ${({ buttonSize }: IButtonProps) => buttonVariations[buttonSize || ""]}
`;
