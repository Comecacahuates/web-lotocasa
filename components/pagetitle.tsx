import * as React from "react";
import Container from "react-bootstrap/Container";

/**
 * Propiedades del componente de título de página
 */
export interface PageTitleProps {
  /* Título */
  title: string;
}

/**
 * Componente de título de página
 * @param {PageTitleProps} props Propiedades
 * @returns Componente
 */

export default function PageTitle(props: PageTitleProps) {
  /* Propiedades */
  const title: string = props.title;

  /* Renderización */
  return (
    <Container>
      <h1 className="display-2 mt-5">{title}</h1>
    </Container>
  );
}
