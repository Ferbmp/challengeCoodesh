import React from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import { formatter } from "../../Services/dateFormatter";

Modal.setAppElement("#root");

const InfoModal = ({ isOpen, onRequestClose, selectedArticle }) => {
  const imgStyle = {
    objectFit: "contain",
    width: "100%",
    maxWidth: "380px",
  };
  const contentContainerStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "spaceBetween",
    alignItems: "center",
  };

  const contentStyle = {
    width: "100%",
    marginLeft: "24px",
    display: "flex",
    flexDirection: "column",
  };

  const buttonStyle = {
    width: "140px",
    padding: "12px",
    borderRadius: "4px",
    fontSize: "16px",
    background: "#302e53",
    color: "#fff",
    border: "none",
    outline: "none",
    marginTop: "64px",
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <div className="contentContainer" style={contentContainerStyle}>
        <img src={selectedArticle.imgUrl} alt="" style={imgStyle} />

        <div className="textContent" style={contentStyle}>
          <h1>{selectedArticle.title}</h1>
          <p>{formatter(selectedArticle.date)}</p>
          <p>{selectedArticle.summary}</p>
        </div>
      </div>
      <button type="submit" style={buttonStyle}>
        <a href={selectedArticle.url}>Ir para o site</a>
      </button>
    </Modal>
  );
};

export default InfoModal;
