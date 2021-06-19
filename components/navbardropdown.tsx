import * as React from "react";
import NavDropdown, { NavDropdownProps } from "react-bootstrap/NavDropdown";

/**
 * Componente de elemento desplegable de la barra de navegación
 * que se despliego automáticamente cuando el cursor pasa encima
 * @param {NavDropdown.NavDropdownProps} Propiedades
 * @returns Componente
 */
export default function NavbarDropdown(props: NavDropdownProps) {
  /* Propiedades */
  const children: React.ReactNode = props.children;

  /* Estado */
  const [isShown, setIsShown] = React.useState<boolean>(false);

  /* Renderización */
  return (
    <NavDropdown
      {...props}
      show={isShown}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {children}
    </NavDropdown>
  );
}
