import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Map from "./ui/map";
import SectionContainer from "./ui/sectioncontainer";
import { MapSection } from "../@types/pagestructure";

/** Propiedades del coponente de sección de mapa  */
export interface MapSectionProps {
  mapSection: MapSection;
}

/** Componente de sección de mapa */
export default function MapSectionUI(props: MapSectionProps) {
  /* Propiedades */
  const mapSection: MapSection = props.mapSection;
  const title: string = mapSection.title;
  const src: string = mapSection.src;
  const height: string = mapSection.height;

  /* Renderización */
  return (
    <SectionContainer title={title}>
      <Row className="px-0 py-3">
        <Col className="px-0">
          <Map src={src} height={height} />
        </Col>
      </Row>
    </SectionContainer>
  );
}
