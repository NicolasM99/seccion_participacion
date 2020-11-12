import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/content.css";
const LandingPage = () => {
  return (
    <div className="pt-5">
      <h1 style={{ position: "fixed", paddingRight: "30px" }}>
        {" "}
        Participación{" "}
      </h1>
      <div
        style={{ height: "100vh", position: "relative" }}
        className="d-flex align-items-center main_paragraph"
      >
        <p className="text-center mx-auto col-lg-6 p-0">
          Explora videos de <b>experiencias</b> y <b>proyectos</b> de
          estudiantes, docentes y egresados de <b>Ingeniería en Multimedia</b>{" "}
          de la <b>UMNG</b>
          <div>
            <Link to="#clasificaciones">explorar</Link>
          </div>
        </p>
      </div>
      <div id="clasificaciones">
        <Row xs={12} className="p-0 m-0">
          <Col lg={4}>item 1</Col>
          <Col lg={4}>item 2</Col>
          <Col lg={4}>item 3</Col>
        </Row>
      </div>
    </div>
  );
};

export default LandingPage;
