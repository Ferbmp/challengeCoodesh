import React from "react";
import styled, { keyframes } from "styled-components";

const SpinnerAnimation = keyframes` 
100% { transform: rotate(360deg) }
`;

const Spinner = styled.div`
  width: 8em;
  height: 8em;
  border-top: 1em solid #302e53;
  border-right: 1em solid transparent;
  border-radius: 50%;
  margin: 32px 0px;
  animation: ${SpinnerAnimation} 0.6s linear infinite;
`;

const Loading = () => {
  return (
    <>
      <Spinner />
    </>
  );
};
export default Loading;
