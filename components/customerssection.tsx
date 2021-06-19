import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/**
 * Propiedades del componente de sección de clientes
 */
export interface CustomersSectionProps {
  /* Contenido */
  content: any;
}

/**
 * Componente de sección de clientes
 * @param {CustomersSectionProps} props Propiedades
 * @returns Componente
 */
export default function CustomersSection(props: CustomersSectionProps) {
  /* Propiedades */
  const content: any = props.content;
  const title: string = content.title;
  const customersList: any = content.customersList;

  /* Renderización */
  return (
    <Container>
      <Row className="hx-5 py-5 justify-content-evenly">
        <Col xs={12} className="py-2">
          {/* Título */}
          <h2 className="display-5 my-3">{title}</h2>
        </Col>
        {/* Lista de clientes */}
        {customersList.map((customer: any, index: number) => (
          <Col key={index} xs={12} md={6} lg={3} className="text-center py-2">
            <img src={customer.imageUrl} alt={customer.name} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
