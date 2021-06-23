import * as React from "react";
import Col from "react-bootstrap/Col";
import Title from "./title";

/** Propiedades del componente de contenedor de subsección */
export interface SubsectionColProps {
  title?: string;
  children: React.ReactNode;
}

/** Componente de contenedor de subsección */
export default function SubsectionCol(props: SubsectionColProps) {
  /* Propiedades */
  const title: string | undefined = props.title;
  const children: React.ReactNode = props.children;

  /* Renderización */
  return (
    <Col className="py-2">
      <Title level={3}>{title}</Title>
      {children}
    </Col>
  );
}
