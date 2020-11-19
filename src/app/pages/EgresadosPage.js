import React, { useEffect } from "react";
import CardsComponent from "../components/CardsComponent";
import VolverButton from "../components/VolverButton";
import { graduatedCardsArray } from "../components/cardsArray";
import { Spring } from "react-spring/renderprops";
const EgresadosPage = ({ setBgColor }) => {
  useEffect(() => {
    setBgColor("radial-gradient(#6B47B8, #270A63)");
  });
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <div className="pt-5" style={{ height: "100vh" }}>
            <h1
              id="graduatedTitle"
              style={{ position: "fixed", paddingRight: "30px" }}
            >
              Egresados
            </h1>
            <div style={{ marginTop: "180px" }}>
              <CardsComponent cardsArray={graduatedCardsArray} />
            </div>
            <VolverButton
              to="/participacion#categorias"
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
