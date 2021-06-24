import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionContainer from "./ui/sectioncontainer";
import Carousel from "./ui/carousel";
import { CarouselSection, CarouselFigure } from "../@types/pagestructure";

/** Propiedades del componente de sección de carrusel */
export interface CarouselSectionProps {
  carouselSection: CarouselSection;
}

/** Componente de sección de carrusel */
export default function CarouselSectionUI(props: CarouselSectionProps) {
  /* Propiedades */
  const carouselSection: CarouselSection = props.carouselSection;
  const title: string | undefined = carouselSection.title;
  const carousel: CarouselFigure = carouselSection.carousel;
  const fluid: "lg" | boolean = carouselSection.fluid ? true : "lg";

  /* Renderización */
  const carouselComponent: React.ReactNode = <Carousel carousel={carousel} />;
  return (
    <React.Fragment>
      {title !== undefined ? (
        <SectionContainer title={title}>
          <Row className="px-0 py-3">
            <Col className="px-0">{carouselComponent}</Col>
          </Row>
        </SectionContainer>
      ) : (
        <Container className="px-0 pb-3" fluid={fluid}>
          {carouselComponent}
        </Container>
      )}
    </React.Fragment>
  );
}
