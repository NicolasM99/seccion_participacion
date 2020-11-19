import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Spring } from "react-spring/renderprops";
import CategoriaCard from "../components/CategoriaCard";
const LandingPage = ({ setBgColor }) => {
  useEffect(() => {
    setBgColor("radial-gradient(#001033, #000)");
  });
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <div
            className="pt-5"
            // style={{ background: "radial-gradient(#e66465, #9198e5)" }}
          >
            <h1
              id="landingPageTitle"
              style={{ position: "fixed", paddingRight: "30px" }}
            >
              Participación
            </h1>
            <div
              style={{ height: "100vh", position: "relative", color: "white" }}
              className="d-flex align-items-center main_paragraph"
            >
              <p className="text-center mx-auto col-lg-6 py-0 px-5">
                Explora videos de{" "}
                <span style={styles.lighter_green}>experiencias</span> y{" "}
                <span style={styles.lighter_green}>proyectos</span> de
                estudiantes, docentes y egresados de{" "}
                <span style={styles.lighter_green}>
                  Ingeniería en Multimedia
                </span>{" "}
                de la <span style={styles.lighter_green}>UMNG</span>
              </p>
              <div
                style={{
                  position: "absolute",
                  bottom: 80,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <a
                  href="#categorias"
                  style={{ ...styles.lighter_green, textDecoration: "none" }}
                >
                  explorar
                  <br />
                  <FontAwesomeIcon icon={faChevronDown} />
                </a>
              </div>
            </div>
            <div id="categorias">
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
                  <CategoriaCard
                    title="Estudiantes"
                    color1="rgba(255, 246, 0, 0.5)"
                    color2="rgba(255, 122, 0, 0.5)"
                    link="/participacion_estudiantes"
                    image="https://www.umng.edu.co/documents/20127/352070/Tren+Neogranadino.jpg/3327e979-f294-6ca5-d273-e567db68d6a7?t=1573595224332"
                  />
                </Col>
                <Col lg={4} className="py-5 px-5">
                  <CategoriaCard
                    title="Docentes"
                    color1="rgba(0, 10, 255, 0.5)"
                    color2="rgba(0, 178, 255, 0.5)"
                    link="/participacion_docentes"
                    image="https://www.umng.edu.co/documents/20127/352073/docentes.jpg/ba150881-5468-e3fe-599e-33086e0b52c1?t=1573578273749&imagePreview=1"
                  />
                </Col>
                <Col lg={4} className="py-5 px-5">
                  <CategoriaCard
                    title="Egresados"
                    color1="rgba(255, 0, 199, 0.5)"
                    color2="rgba(112, 19, 255, 0.5)"
                    link="/participacion_egresados"
                    image="https://sites.google.com/site/luisantoniocoy/losmiserables.JPG"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
};

const styles = {
  lighter_green: {
    color: "#7DFFB8",
  },
};

export default LandingPage;
