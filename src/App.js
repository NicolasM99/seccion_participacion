import logo from "./logo.svg";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import EstudiantesPage from "./app/pages/EstudiantesPage";
import ParticlesScreen from "./app/components/ParticlesScreen";
import LandingPage from "./app/pages/LandingPage";
import NavigationBar from "./app/components/NavigationBar";
import React, { useState } from "react";
import EgresadosPage from "./app/pages/EgresadosPage";
import DocentesPage from "./app/pages/DocentesPage";
import Iframe from "react-iframe";
const App = () => {
  const [bgColor, setBgColor] = useState("radial-gradient(#001033, #000)");
  const [navColor, setNavColor] = useState("#241E3F");
  return (
    <BrowserRouter>
      <Container
        fluid={true}
        style={{
          position: "relative",
          height: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <Row className="p-0 m-0">
          <Col className="p-0">
            <NavigationBar navColor={navColor} />
          </Col>
          <Col className="p-0" lg={10}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route
                exact
                path="/home"
                component={() => (
                  <Iframe
                    src="https://seccion-home.web.app/"
                    width="100%"
                    height="1000px"
                    frameBorder={0}
                    className="mx-auto"
                  />
                )}
              />
              <Route
                exact
                path="/pensum"
                component={() => (
                  <div style={{ height: "100vh" }}>
                    <Iframe
                      src="https://mult-in.000webhostapp.com/"
                      width="100%"
                      height="100%"
                      position="absolute"
                      frameBorder={0}
                      className="mx-auto"
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/participacion"
                component={() => (
                  <LandingPage
                    setBgColor={setBgColor}
                    setNavColor={setNavColor}
                  />
                )}
              />
              <Route
                exact
                path="/participacion_estudiantes"
                component={() => (
                  <EstudiantesPage
                    setBgColor={setBgColor}
                    setNavColor={setNavColor}
                  />
                )}
              />
              <Route
                exact
                path="/participacion_egresados"
                component={() => (
                  <EgresadosPage
                    setBgColor={setBgColor}
                    setNavColor={setNavColor}
                  />
                )}
              />
              <Route
                exact
                path="/participacion_docentes"
                component={() => (
                  <DocentesPage
                    setBgColor={setBgColor}
                    setNavColor={setNavColor}
                  />
                )}
              />
            </Switch>
            <ParticlesScreen
              style={{
                // position: "absolute",
                zIndex: "-1",
                // backgroundColor: bgColor,
                // background: "radial-gradient(#e66465, #9198e5)",
              }}
              background={bgColor}
              width="100%"
              height="150%"
            />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
