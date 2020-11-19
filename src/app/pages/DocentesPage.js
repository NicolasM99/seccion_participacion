import React, { useEffect } from "react";
import CardsComponent from "../components/CardsComponent";
import VolverButton from "../components/VolverButton";
import { teachersCardsArray } from "../components/cardsArray";
import { Spring } from "react-spring/renderprops";
const DocentesPage = ({ setBgColor }) => {
  useEffect(() => {
    setBgColor("radial-gradient(#65DCDC, #007676)");
  });
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <div className="pt-5" style={{ height: "100vh" }}>
            <h1
              id="teachersTitle"
              style={{ position: "fixed", paddingRight: "30px" }}
            >
              Docentes
            </h1>
            <div style={{ marginTop: "180px" }}>
              <CardsComponent cardsArray={teachersCardsArray} />
            </div>
            <VolverButton
              to="/participacion#categorias"
              color="#83ffff"
              style={{ position: "fixed", right: 30, bottom: 30 }}
            />
          </div>
        </div>
      )}
    </Spring>
  );
};

export default DocentesPage;
