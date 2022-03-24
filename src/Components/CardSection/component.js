import React, { useState, useEffect } from "react";
import api from "../../Services/api";
import Loading from "../Animation/Loading";
import Card from "../Card/component";
import { SectionContainer } from "./style";

const CardSection = ({ searchParams, articlesList, setarticlesList }) => {
  const [articlesPagination, setarticlesPagination] = useState(5);
  const [loading, setLoading] = useState(false);

  const request = () => {
    api
      .get("/articles?_limit=5")
      .then((res) => {
        setarticlesList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const paginationRequest = (e) => {
    setLoading(true);

    setarticlesPagination(articlesPagination + 10);
    api
      .get(`/articles?_limit=10&_start=${articlesPagination}`)
      .then((res) => {
        setarticlesList((prevValue) => {
          return [...prevValue, ...res.data];
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    request();
  }, []);

  const searchTerm = searchParams.get("title") || "";
  const filteredList = articlesList.filter(
    (article) =>
      article.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
  );

  return (
    <>
      <SectionContainer>
        {filteredList.length > 0 &&
          filteredList?.map((article) => (
            <Card
              key={article.id}
              imgUrl={article.imageUrl}
              title={article.title}
              newsSite={article.newsSite}
              summary={article.summary}
              url={article.url}
              date={article.publishedAt}
            />
          ))}

        {loading === false ? (
          <button className="loadMoreButton" onClick={paginationRequest}>
            Carregar Mais
          </button>
        ) : (
          <Loading />
        )}
      </SectionContainer>
    </>
  );
};

export default CardSection;
