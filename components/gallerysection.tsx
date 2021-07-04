import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionContainer from "./ui/sectioncontainer";
import Gallery from "./ui/gallery";
import { GallerySection } from "../@types/pagestructure";

/* Propiedades del componente de sección de galería */
export interface GallerySectionProps {
  gallerySection: GallerySection;
}

/* Componente de sección de galería */
export default function GallerySectionUI(props: GallerySectionProps) {
  /* Propiedades */
  const gallerySection: GallerySection = props.gallerySection;
  const { title, carousel } = gallerySection;

  /* Renderización */
  return (
    <SectionContainer title={title}>
      <Row className="px-0 py-3">
        <Col className="px-0">
          <Gallery carousel={carousel} />
        </Col>
      </Row>
    </SectionContainer>
  );
}
