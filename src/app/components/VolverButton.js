import React from "react";
import { Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const VolverButton = ({ to, style, color }) => (
  <HashLink style={style} to={"/participacion#categorias"}>
    <Button
      style={{
        borderRadius: 50,
        fontWeight: "bold",
        fontFamily: "Raleway",
        color: "#241e3f",
        backgroundColor: color,
        borderColor: "transparent",
        fontSize: "1.4rem",
        padding: "5px 30px",
        filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3))",
      }}
    >
      volver
    </Button>
  </HashLink>
);

export default VolverButton;
