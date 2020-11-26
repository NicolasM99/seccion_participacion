import React, { useEffect } from "react";
import CardsComponent from "../components/CardsComponent";
import VolverButton from "../components/VolverButton";
import { graduatedCardsArray } from "../components/cardsArray";
import { Spring } from "react-spring/renderprops";
import Frame from "../imgs/morado.png";

const EgresadosPage = ({ setBgColor, setNavColor }) => {
  useEffect(() => {
    setNavColor("#241E3F");
    setBgColor("radial-gradient(#6B47B8, #270A63)");
  });
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <div className="pt-5" style={{ height: "100vh" }}>
            <h1
              id="graduatedTitle"
              className="participacion_titles"
              style={{ position: "fixed", paddingRight: "30px" }}
            >
              Egresados
            </h1>
            <div style={{ marginTop: "180px" }}>
              <CardsComponent cardsArray={graduatedCardsArray} frame={Frame} />
            </div>
            <VolverButton
              to="/participacion"
              color="#cbb4ff"
              style={{ position: "fixed", right: 30, bottom: 30 }}
            />
          </div>
        </div>
      )}
    </Spring>
  );
};

export default EgresadosPage;
