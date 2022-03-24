import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  div {
    &.contentWrapper {
      display: flex;
      flex-direction: row;
    }
  }
`;
