import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  button {
    &.loadMoreButton {
      margin: 64px 0px;
      width: 140px;
      padding: 8px;
      border: 1px solid #d07017;
      color: #d07017;
      font-weight: bold;
      background-color: #fff;
      outline: none;
      cursor: pointer;
    }
  }
`;
