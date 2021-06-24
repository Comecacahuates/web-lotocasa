import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionContainer from "./ui/sectioncontainer";
import Image from "./ui/image";
import { CustomersSection, Customer } from "../@types/pagestructure";

/** Propiedades del componente de sección de clientes */
export interface CustomersSectionProps {
  customersSection: CustomersSection;
}

/** Componente de sección de clientes */
export default function CustomersSectionUI(props: CustomersSectionProps) {
  /* Propiedades */
  const customersSection: CustomersSection = props.customersSection;
  const title: string | undefined = customersSection.title;
  const list: Customer[] = customersSection.customersList;

  /* Renderización */
  return (
    <SectionContainer title={title}>
      {/* Lista de clientes */}
      <Row className="gx-5 py-3 justify-content-evenly" xs={1} md={2} lg={4}>
        {list.map((item: Customer, index: number) => (
          <Col key={index} className="text-center py-2">
            <Image imageFigure={item.image} />
          </Col>
        ))}
      </Row>
    </SectionContainer>
  );
}
