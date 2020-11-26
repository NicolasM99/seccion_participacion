import React, { useState } from "react";
import { Card, Row, Col, Modal } from "react-bootstrap";
import "../styles/cardStyle.css";
import "../styles/youtubeContainer.css";
import YouTube from "react-youtube";
import Iframe from "react-iframe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const thumbnailOpt = {};

const CardsComponent = ({ cardsArray, frame }) => {
  const [modalTitle, setModalTitle] = useState(null);
  const [modalAuthor, setModalAuthor] = useState(null);
  const [frameLink, setFrameLink] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [projectLink, setProjectLink] = useState(null);
  const handleClose = () => setShowModal(false);
  const handleShow = (frameLink, projectLink, name, author) => {
    setFrameLink(frameLink);
    setModalTitle(name);
    setModalAuthor(author);
    setProjectLink(projectLink);
    setShowModal(true);
  };

  return (
    <>
      <Modal
        dialogClassName="modal-90w"
        show={showModal}
        onHide={handleClose}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton style={{ color: "white" }}>
          <p>
            <b>{modalTitle} </b> |{" "}
            <span style={{ color: "lightgray" }}>{modalAuthor}</span>
          </p>
        </Modal.Header>
        <Modal.Body
          style={{ backgroundColor: "transparent", border: 0, outline: 0 }}
        >
          <Iframe
            src={frameLink}
            width="100%"
            height="100%"
            frameBorder={0}
            className="mx-auto"
          />
        </Modal.Body>
        <Modal.Footer>
          <a
            style={{ color: "white" }}
            href={projectLink}
            target="_blank"
            rel="noreferrer"
          >
            Ver en sitio web <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </Modal.Footer>
      </Modal>
      <Row
        className="p-5 col-xl-10 col-sm-11 mx-auto"
        style={{
          backgroundColor: "rgba(255,255,255,0.3)",
          overflow: "auto",
          height: "70vh",
          flexDirection: "row",
          borderRadius: "10px",
        }}
      >
        {cardsArray.map((item) => (
          <Col className="mb-5" lg={4} md={6}>
            {item.youtube ? (
              <YouTube
                className="col-12"
                videoId={item.videoId}
                opts={item.opts}
                onReady={item.onReady}
                style={{ height: "200px" }}
              />
            ) : (
              <Card
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  height: "100%",
                }}
                className="cardContainer"
              >
                <div
                  className="card-link"
                  onClick={() =>
                    handleShow(
                      item.frameLink,
                      item.link,
                      item.name,
                      item.author
                    )
                  }
                >
                  <Card.Img
                    src={frame}
                    style={{
                      // backgroundColor: "gray",
                      objectPosition: "center",
                      borderRadius: "10px",
                      borderColor: "transparent",
                      height: "100%",
                      width: "100%",
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      filter: "brightness(0.8)",
                    }}
                  />
                  <Card.ImgOverlay>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                      }}
                    >
                      <h3>
                        <b>{item.name}</b>
                      </h3>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.7)",
                          fontSize: "0.8rem",
                        }}
                      >
                        {item.author}
                      </p>
                    </div>
                  </Card.ImgOverlay>
                </div>
              </Card>
            )}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CardsComponent;
