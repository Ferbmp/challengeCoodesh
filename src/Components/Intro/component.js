import React from "react";
import { Container } from "./style";
import { IoIosRocket } from "react-icons/io";

const Intro = () => {
  return (
    <>
      <Container>
        <div className="contentWrapper">
          <div className="iconContainer">
            <IoIosRocket size="68px" />
          </div>

          <h1>Space Flight News</h1>
        </div>
      </Container>
    </>
  );
};

export default Intro;
