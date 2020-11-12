import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const VolverButton = ({ to, style }) => (
  <Link style={style} to={to}>
    <Button
      style={{
        borderRadius: 50,
        fontWeight: "bold",
        fontFamily: "Raleway",
        color: "black",
        backgroundColor: "white",
        borderColor: "transparent",
        fontSize: "1.4rem",
        padding: "5px 30px",
      }}
    >
      volver
    </Button>
  </Link>
);

export default VolverButton;
