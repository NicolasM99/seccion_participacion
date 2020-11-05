import React from "react";
import CardsComponent from "../components/CardsComponent";
import { Card, CardDeck } from "react-bootstrap";

const EstudiantesPage = () => {
  return (
    <div className="pt-5">
      <h1>Estudiantes</h1>
      <CardsComponent />
    </div>
  );
};

export default EstudiantesPage;
