import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import EstudiantesPage from "./app/pages/EstudiantesPage";
import ParticlesScreen from "./app/components/ParticlesScreen";
import LandingPage from "./app/pages/LandingPage";
import NavigationBar from "./app/components/NavigationBar";
import Iframe from "react-iframe";
import React, { useState } from "react";
import EgresadosPage from "./app/pages/EgresadosPage";
import DocentesPage from "./app/pages/DocentesPage";
const App = () => {
  const [bgColor, setBgColor] = useState("radial-gradient(#001033, #000)");
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
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/participacion" />
          </Route>
          <Route
            exact
            path="/participacion"
            component={() => <LandingPage setBgColor={setBgColor} />}
          />
          <Route
            exact
            path="/participacion_estudiantes"
            component={() => <EstudiantesPage setBgColor={setBgColor} />}
          />
          <Route
            exact
            path="/participacion_egresados"
            component={() => <EgresadosPage setBgColor={setBgColor} />}
          />
          <Route
            exact
            path="/participacion_docentes"
            component={() => <DocentesPage setBgColor={setBgColor} />}
          />
        </Switch>
        {/* <Iframe
          src="https://i.simmer.io/@Su3g4n4_LuEmeBa/c-lculo-de-torque"
          width="960px"
          height="600px"
          frameBorder={0}
          // styles={{ width: "960px", height: "600px", border: 0 }}
        />
        <Iframe
          width="860px"
          height="480px"
          src="https://poly.google.com/view/e874MXF7OCO/embed"
          frameBorder={0}
          allowvr="yes"
          allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          onmousewheel=""
        /> */}
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
      </Container>
    </BrowserRouter>
  );
};

export default App;
