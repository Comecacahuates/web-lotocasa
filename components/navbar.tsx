import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import NavbarDropdown from "../components/navbardropdown";

const navbarItems = [
  {
    title: "Inicio",
    route: "/",
  },
  {
    id: "CarpasIndustrialesNavbarItem",
    isDropdown: true,
    title: "Carpas industriales",
    route: "/CarpasIndustriales",
    subitems: [
      {
        title: "Áreas de trabajo",
        route: "/CarpasIndustriales#AreasDeTrabajo",
      },
      {
        title: "Almacenes",
        route: "/CarpasIndustriales#Almacenes",
      },
    ],
  },
  {
    id: "CarpasParaEventosNavbarItem",
    isDropdown: true,
    title: "Carpas para eventos",
    route: "/CarpasParaEventos",
    subitems: [
      {
        title: "Eventos sociales",
        route: "/CarpasParaEventos#EventosSociales",
      },
      {
        title: "Eventos empresariales",
        route: "/CarpasParaEventos#EventosEmpresariales",
      },
      {
        title: "Eventos comerciales y exposiciones",
        route: "/CarpasParaEventos#EventosComercialesYExposiciones",
      },
    ],
  },
  {
    title: "Contacto",
    route: "/Contacto",
  },
];

/**
 * Propiedades del componente de la barra de navegación
 */
export interface NavbarProps {
  /* Elemento activo */
  activeItem: string;
}

/**
 * Componente de la barra de navegación
 * @param{NavbarProps} props Propiedades
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
            {navbarItems.map((navbarItem, index) =>
              navbarItem.isDropdown ? (
                <NavbarDropdown
                  title={navbarItem.title}
                  id={navbarItem.id}
                  autoClose={true}
                  active={navbarItem.route === activeItem}
                >
                  {navbarItem.subitems.map((subitem, index) => (
                    <NavDropdown.Item href={subitem.route}>
                      {subitem.title}
                    </NavDropdown.Item>
                  ))}
                </NavbarDropdown>
              ) : (
                <Nav.Link
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
