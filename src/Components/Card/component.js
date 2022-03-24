import React, { useState } from "react";
import { formatter } from "../../Services/dateFormatter";
import InfoModal from "../Modal/component";
import { CardContainer } from "./style";

const Card = ({ imgUrl, title, newsSite, summary, url, date }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const openModal = () => {
    setIsOpen(true);
    setSelectedArticle({ imgUrl, title, summary, url, date });
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {selectedArticle != null && (
        <InfoModal
          isOpen={isOpen}
          onRequestClose={closeModal}
          selectedArticle={selectedArticle}
        />
      )}

      <CardContainer>
        <div className="imageContainer">
          <img src={imgUrl} alt="rocket" />
        </div>
        <div className="contentContainer">
          <h1>{title}</h1>
          <div>
            <p>{formatter(date)}</p>
            <div className="newsSiteInfo">{newsSite}</div>
          </div>

          <p>{summary}</p>

          <button className="seeMoreButton" onClick={openModal}>
            Ver Mais
          </button>
        </div>
      </CardContainer>
    </>
  );
};

export default Card;
