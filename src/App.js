import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";
import EstudiantesPage from "./app/pages/EstudiantesPage";
import ParticlesScreen from "./app/components/ParticlesScreen";
function App() {
  return (
    <HashRouter>
      <Container
        fluid={true}
        style={{
          position: "relative",
          height: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <ParticlesScreen
          style={{
            position: "absolute",
            zIndex: "-1",
            backgroundColor: "gray",
          }}
          width="100%"
          height="100%"
        />
        <Switch>
          <Route exact path="/" component={EstudiantesPage} />
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
