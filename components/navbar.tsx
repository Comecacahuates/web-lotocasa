import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import NavbarDropdown from "../components/navbardropdown";

import navbarItems from "../content/navbar.json";

/**
 * Propiedades del componente de la barra de navegación
 */
export interface NavbarProps {
  /* Elemento activo */
  activeItem: string;
}

/**
 * Componente de la barra de navegación
 * @param {NavbarProps} props Propiedades
 * @returns Componente
 */
export default function (props: NavbarProps) {
  /* Propiedades */
  const activeItem: string = props.activeItem;

  /* Renderización */
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand>Lonas, Toldos y Carpas</Navbar.Brand>
        {/* Botón de barra de navegación responsiva */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Elementos de la barra de navegación */}
        <Navbar.Collapse>
          <Nav className="ms-auto" activeKey={activeItem}>
            {navbarItems.map((navbarItem: any, index: number) =>
              navbarItem.isDropdown ? (
                <NavDropdown
                  key={index}
                  title={navbarItem.title}
                  id={navbarItem.id}
                  autoClose={true}
                  active={navbarItem.route === activeItem}
                >
                  {navbarItem.subitems.map((subitem: any, index: number) => (
                    <NavDropdown.Item key={index} href={subitem.route}>
                      {subitem.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  key={index}
                  href={navbarItem.route}
                  active={navbarItem.route === activeItem}
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
