import { shade } from "polished";
import styled from "styled-components";

export const Hr = styled.hr`
  margin-top: 5px;
  margin-bottom: 30px;
  max-width: 300px;

  &:hover {
    background-color: ${shade(0.2, "#F3701F")};
  }
`;

export const Container = styled.div`
  margin-top: 15%;
  a {
    &:hover {
      color: ${shade(0.1, "#F3701F")};
    }
  }
`;
