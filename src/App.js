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
function App() {
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
          <Route exact path="/participacion" component={LandingPage} />
          <Route
            exact
            path="/participacion_estudiantes"
            component={EstudiantesPage}
          />
        </Switch>
        <ParticlesScreen
          style={{
            position: "absolute",
            zIndex: "-1",
            backgroundColor: "gray",
          }}
          width="100%"
          height="100%"
        />
      </Container>
    </BrowserRouter>
  );
}

export default App;
