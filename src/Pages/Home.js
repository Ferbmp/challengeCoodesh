import React, { useState } from "react";
import Header from "../Components/Header/component";
import Intro from "../Components/Intro/component";
import CardSection from "../Components/CardSection/component";

import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = React.useState("Newer");
  const [articlesList, setarticlesList] = useState([]);

  return (
    <>
      <Header
        setSearchParams={setSearchParams}
        order={order}
        setOrder={setOrder}
        articlesList={articlesList}
        setarticlesList={setarticlesList}
      />
      <Intro />
      <CardSection
        searchParams={searchParams}
        order={order}
        articlesList={articlesList}
        setarticlesList={setarticlesList}
      />
    </>
  );
};

export default Home;
