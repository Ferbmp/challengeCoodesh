import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0px 16px;
  div {
    &.searchInputs {
      margin-top: 16px;
      display: flex;
      border: 0.5px solid #1e2022;
      border-radius: 4px;
    }
    &.search input {
      background-color: white;
      border: 0;
      border-radius: 2px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      font-size: 18px;
      padding: 8px;
      height: auto;
      width: 180px;
      &:focus {
        outline: none;
      }
    }
    &.searchIcon {
      height: auto;
      width: 28px;
      margin: 4px;
      background-color: #1e2022;
      display: grid;
      place-items: center;
    }
    &.searchIcon svg {
      font-size: 18px;
      color: white;
    }
  }
`;
