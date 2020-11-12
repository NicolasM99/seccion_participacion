import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
const LandingPage = () => {
  return (
    <div className="pt-5">
      <h1 style={{ position: "fixed", paddingRight: "30px" }}>Participación</h1>
      <div
        style={{ height: "100vh", position: "relative", color: "white" }}
        className="d-flex align-items-center main_paragraph"
      >
        <p className="text-center mx-auto col-lg-6 p-0">
          Explora videos de <b>experiencias</b> y <b>proyectos</b> de
          estudiantes, docentes y egresados de <b>Ingeniería en Multimedia</b>{" "}
          de la <b>UMNG</b>
        </p>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            textAlign: "center",
            width: "100%",
          }}
        >
          <a href="#clasificaciones" style={{ textDecoration: "none" }}>
            explorar
            <br />
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </div>
      </div>
      <div id="clasificaciones">
        <Row
          xs={12}
          className="pt-5 mx-auto"
          style={{
            paddingTop: "20vh",
            fontFamily: "Raleway",
            fontWeight: "bold",
            paddingBottom: "20vh",
          }}
        >
          <Col lg={4} className="py-5 px-5">
            <Link to="/participacion_estudiantes">
              <Card
                style={{
                  height: "500px",
                  backgroundColor: "darkgray",
                  position: "relative",
                  borderTopLeftRadius: "15%",
                  borderBottomRightRadius: "15%",
                }}
              >
                <Card.ImgOverlay>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                    }}
                  >
                    <h2 style={{ fontSize: "3rem" }}>
                      <b>Estudiantes</b>
                    </h2>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>
          <Col lg={4} className="py-5 px-5">
            <Link to="/participacion_estudiantes">
              <Card
                style={{
                  height: "500px",
                  backgroundColor: "darkgray",
                  position: "relative",
                  borderTopLeftRadius: "15%",
                  borderBottomRightRadius: "15%",
                }}
              >
                <Card.ImgOverlay>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                    }}
                  >
                    <h2 style={{ fontSize: "3rem" }}>
                      <b>Docentes</b>
                    </h2>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>
          <Col lg={4} className="py-5 px-5">
            <Link to="/participacion_estudiantes">
              <Card
                style={{
                  height: "500px",
                  backgroundColor: "darkgray",
                  position: "relative",
                  borderTopLeftRadius: "15%",
                  borderBottomRightRadius: "15%",
                }}
              >
                <Card.ImgOverlay>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                    }}
                  >
                    <h2 style={{ fontSize: "3rem" }}>
                      <b>Egresados</b>
                    </h2>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LandingPage;
