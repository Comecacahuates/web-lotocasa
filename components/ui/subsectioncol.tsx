import * as React from "react";
import Col, { ColProps } from "react-bootstrap/Col";
import Title from "./title";

/** Propiedades del componente de contenedor de subsección */
export interface SubsectionColProps extends ColProps {
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
    <Col className="py-2" {...props}>
      <Title level={3}>{title}</Title>
      {children}
    </Col>
  );
}
