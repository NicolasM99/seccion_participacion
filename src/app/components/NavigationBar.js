import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {
  faHome,
  faInfoCircle,
  faListAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar2.css";
import inMultiLogo from "../imgs/inmulti-logo.png";

const NavigationBar = ({ navColor }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      collapseOnSelect={true}
      expand="lg"
      fixed="top"
      style={{ backgroundColor: navColor }}
      className="my-navbar p-0 col-lg-2 shadow-lg"
    >
      <div className="brandContainer text-center p-0">
        <Navbar.Brand
          className="mx-0"
          as={NavLink}
          to="/home"
          onClick={() => {
            setExpanded(false);
          }}
        >
          <div className="logo_container text-center">
            <img
              className="multifolioLogo"
              src={inMultiLogo}
              alt="logo_multifolio"
              style={{
                display: "flex",
              }}
            />
          </div>
        </Navbar.Brand>
      </div>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="navbar-dark mr-3"
        onClick={() => {
          setExpanded(!expanded);
        }}
        style={{ borderColor: "#fff" }}
      />
      <Navbar.Collapse id="my-navbar col-6">
        <Nav className="flex-column">
          <Nav.Link
            as={Link}
            to="/home"
            onClick={() => {
              setExpanded(false);
            }}
          >
            <FontAwesomeIcon icon={faHome} /> Inicio
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/participacion"
            onClick={() => {
              setExpanded(false);
            }}
          >
            <FontAwesomeIcon icon={faListAlt} /> Participación
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/pensum"
            onClick={() => {
              setExpanded(false);
            }}
          >
            <FontAwesomeIcon icon={faSearch} /> Pensum
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
