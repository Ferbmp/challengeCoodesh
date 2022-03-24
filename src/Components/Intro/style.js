import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 380px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #1e2022;
  div {
    &.contentWrapper {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h1 {
        color: #1e2022;
        margin-top: 16px;
      }
    }

    &.iconContainer {
      padding: 32px;
      border-radius: 100%;
      border: 0.5px solid #1e2022;
    }
  }
`;
