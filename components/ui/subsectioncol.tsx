import * as React from "react";
import Col, { ColProps } from "react-bootstrap/Col";
import Title from "./title";

/** Propiedades del componente de contenedor de subsección */
export interface SubsectionColProps extends ColProps {
  title?: string;
  hasBackgroundImage: boolean;
  children: React.ReactNode;
}

/** Componente de contenedor de subsección */
export default function SubsectionCol(props: SubsectionColProps) {
  /* Propiedades */
  const { title, children, hasBackgroundImage, ...colProps } = props;

  /* Clases */
  const bgAuxClass: string = hasBackgroundImage ? "bg-aux" : "";

  /* Renderización */
  return (
    <Col className="py-2" {...colProps}>
      <Title level={3}>
        <span className={bgAuxClass}>{title}</span>
      </Title>
      {children}
    </Col>
  );
}
