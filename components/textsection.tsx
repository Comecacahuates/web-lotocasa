import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionTitle from "../components/sectiontitle";

/**
 * Propiedades del componente de sección de texto
 */
export interface TextSectionProps {
  /* Contenido */
  content: any;
}

/**
 * Componente de sección de texto
 * @param {TextSectionProps} Propiedades
 * @returns Componente
 */
export default function TextSection(props: TextSectionProps) {
  /* Propiedades */
  const content: any = props.content;
  const title: string = content.title;
  const paragraphs: string[] = content.paragraphs;
  const subsections: any = content.subsections;

  /* Renderización */
  return (
    <Container>
      <Row className="gx-5 py-5">
        <Col xs={12} className="py-2">
          {/* Título */}
          <SectionTitle title={title} />
          {/* Párrafos */}
          {paragraphs.map((paragraph: string, index: number) => (
            <p key={index} className="lead">
              {paragraph}
            </p>
          ))}
        </Col>
        {/* Subsecciones */}
        {subsections.map((subsection: any, index: number) => (
          <Col key={index} md={12} lg={6} className="py-2">
            <h3>{subsection.title}</h3>
            <p className="lead">{subsection.caption}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
