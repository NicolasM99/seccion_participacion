import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoriaCard = ({ title, color1, color2, link, image }) => (
  <Link className="card-link" to={link} style={{ height: "100% !important" }}>
    <Card
      style={{
        height: "500px",
        backgroundColor: "darkgray",
        position: "relative",
        borderTopLeftRadius: "15%",
        borderBottomRightRadius: "15%",
        border: 0,
      }}
    >
      <Card.ImgOverlay
        style={{
          backgroundImage: `linear-gradient(to bottom, ${color1}, ${color2}), url('${image}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          borderTopLeftRadius: "15%",
          borderBottomRightRadius: "15%",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
          }}
        >
          <h2 style={{ fontSize: "3rem" }}>
            <b>{title}</b>
          </h2>
        </div>
      </Card.ImgOverlay>
    </Card>
  </Link>
);

export default CategoriaCard;
