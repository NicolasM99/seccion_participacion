import React from "react";
import CardsComponent from "../components/CardsComponent";
import VolverButton from "../components/VolverButton";
const EstudiantesPage = () => {
  return (
    <div className="pt-5" style={{ height: "100vh" }}>
      <h1>Estudiantes</h1>
      <CardsComponent />
      <VolverButton
        to="/participacion"
        style={{ position: "fixed", right: 30, bottom: 30 }}
      />
    </div>
  );
};

export default EstudiantesPage;
