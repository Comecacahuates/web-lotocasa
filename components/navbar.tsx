import * as React from "react";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { NavbarItem } from "../@types/pagestructure";
import styles from "./navbar.module.scss";

import navbar from "../content/navbar.json";

/** Propiedades del componente de la barra de navegación */
export interface NavbarProps {
  /* Elemento activo */
  activeItem: string;
}

/** Componente de la barra de navegación */
export default function NavbarUI(props: NavbarProps) {
  /* Propiedades */
  const activeItem: string = props.activeItem;

  /* Renderización */
  return (
    <Navbar bg="primary" variant="light" expand="lg" sticky="top">
      <Container fluid="md">
        {/* Logo */}
        <Navbar.Brand>
          <a href="/" className="text-decoration-none text-dark">
            <div
              className={`position-relative d-inline-block align-middle ${styles.logo}`}
            >
              <Image
                src={navbar.logo.src}
                alt={navbar.logo.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
            Lonas, Toldos y Carpas
          </a>
        </Navbar.Brand>
        {/* Botón de barra de navegación responsiva */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Elementos de la barra de navegación */}
        <Navbar.Collapse>
          <Nav className="ms-auto" activeKey={activeItem}>
            {navbar.items.map((item: NavbarItem, index: number) =>
              item.subitems !== undefined ? (
                <NavDropdown
                  key={index}
                  title={item.title}
                  id={item.id || ""}
                  autoClose={true}
                  active={item.link === activeItem}
                >
                  {item.subitems.map((subitem: any, index: number) => (
                    <NavDropdown.Item key={index} href={subitem.link}>
                      {subitem.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  key={index}
                  href={item.link}
                  active={item.link === activeItem}
                >
                  {item.title}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
