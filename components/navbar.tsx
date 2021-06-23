import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { NavbarItem } from "../@types/pagestructure";

import navbarItems from "../content/navbar.json";

/** Propiedades del componente de la barra de navegación */
export interface NavbarProps {
  /* Elemento activo */
  activeItem: string;
}

/** Componente de la barra de navegación */
export default function (props: NavbarProps) {
  /* Propiedades */
  const activeItem: string = props.activeItem;

  /* Renderización */
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand>Lonas, Toldos y Carpas</Navbar.Brand>
        {/* Botón de barra de navegación responsiva */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Elementos de la barra de navegación */}
        <Navbar.Collapse>
          <Nav className="ms-auto" activeKey={activeItem}>
            {navbarItems.map((navbarItem: NavbarItem, index: number) =>
              navbarItem.subitems !== undefined ? (
                <NavDropdown
                  key={index}
                  title={navbarItem.title}
                  id={navbarItem.id || ""}
                  autoClose={true}
                  active={navbarItem.link === activeItem}
                >
                  {navbarItem.subitems.map((subitem: any, index: number) => (
                    <NavDropdown.Item key={index} href={subitem.link}>
                      {subitem.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  key={index}
                  href={navbarItem.link}
                  active={navbarItem.link === activeItem}
                >
                  {navbarItem.title}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
