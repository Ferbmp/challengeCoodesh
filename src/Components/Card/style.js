import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e2022;
  margin: 32px 0px;
  div {
    &.imageContainer {
      width: 50%;
      margin-right: 20px;
      img {
        object-fit: contain;
        width: 100%;
      }
    }
    &.contentContainer {
      width: 50%;
      display: flex;
      flex-direction: column;
      p {
        font-size: 16px;
      }

      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 8px 0px;
        p {
          font-size: 12px;
        }
        &.newsSiteInfo {
          border-radius: 2px;

          background-color: #302e53;
          width: auto;
          padding: 4px;
          color: #fff;
        }
      }
    }
  }

  button {
    &.seeMoreButton {
      width: 120px;
      padding: 8px;
      margin: 8px 0px;
      background-color: #302e53;
      border-radius: 6px;
      border: none;
      outline: none;
      color: #fff;
      cursor: pointer;
    }
  }
`;
