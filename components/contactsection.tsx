import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MeansOfContact from "../components/meansofcontactsection";
import Address from "../components/address";
import OpeningHours from "../components/openinghours";
import MapSection from "../components/mapsection";

/**
 * Propiedades del componente de sección de contacto
 */
export interface ContactSectionProps {
  /* Contenido */
  content: any;
}

/**
 * Componente de sección de contacto
 * @param {ContactSectionProps} props Propiedades
 * @returns Componente
 */
export default function ContactSection(props: ContactSectionProps) {
  /* Propiedades */
  const content: any = props.content;
  const meansOfContact: any = content.meansOfContact;
  const address: any = content.address;
  const openingHours: any = content.openingHours;
  const map: any = content.map;

  /* Renderización */
  return (
    <Container>
      <Row className="gx-5 py-5">
        {/* Dirección */}
        <Col sm={12} md={6} lg={4} className="py-2">
          <Address content={address} />
        </Col>
        {/* Horario de atención */}
        <Col sm={12} md={6} lg={4} className="py-2">
          <OpeningHours content={openingHours} />
        </Col>
        {/* Medios de contacto */}
        <Col sm={12} md={6} lg={4} className="py-2">
          <MeansOfContact content={meansOfContact} />
        </Col>

        {/* Mapa */}
        <Col sm={12} className="px-0 py-2">
          <MapSection content={map} />
        </Col>
      </Row>
    </Container>
  );
}
