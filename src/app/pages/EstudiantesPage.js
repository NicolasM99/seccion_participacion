import React, { useEffect } from "react";
import CardsComponent from "../components/CardsComponent";
import VolverButton from "../components/VolverButton";
import { studentsCardsArray } from "../components/cardsArray";
import { Spring } from "react-spring/renderprops";
import Frame from "../imgs/naranja.png";

const EstudiantesPage = ({ setBgColor, setNavColor }) => {
  useEffect(() => {
    setNavColor("#241E3F");
    setBgColor("radial-gradient(#E4BE5B, #BB4300)");
  });
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <div className="pt-5" style={{ height: "100vh" }}>
            <h1
              id="studentsTitle"
              className="participacion_titles"
              style={{ position: "fixed", paddingRight: "30px" }}
            >
              Estudiantes
            </h1>
            <div style={{ marginTop: "180px" }}>
              <CardsComponent cardsArray={studentsCardsArray} frame={Frame} />
            </div>
            <VolverButton
              to="/participacion"
              color="#FFBF83"
              style={{ position: "fixed", right: 30, bottom: 30 }}
            />
          </div>
        </div>
      )}
    </Spring>
  );
};

export default EstudiantesPage;
