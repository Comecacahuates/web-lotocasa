import * as React from "react";
import Container from "react-bootstrap/Container";
import Title from "./title";

/** Propiedades del componente de contenedor de sección */
export interface SectionContainerProps {
  title?: string;
  id?: string;
  children?: React.ReactNode;
}

/** Componente de contenedor de sección */
export default function SectionContainer(props: SectionContainerProps) {
  /* Propiedades */
  const title: string | undefined = props.title;
  const id: string = props.id || "";
  const children: React.ReactNode | undefined = props.children;

  /* Renderización */
  return (
    <Container id={id} className="py-3 overflow-hidden" fluid="md">
      {title ? <Title level={2}>{title}</Title> : ""}
      {children}
    </Container>
  );
}
