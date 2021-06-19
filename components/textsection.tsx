import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SectionTitle from "../components/sectiontitle";
import Icon from "../components/icon";

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
  const id: string = content.id || "";
  const texts: string[] = content.texts;
  const subsections: any = content.subsections;

  /* Renderización */
  return (
    <Container id={id}>
      <Row className="gx-5 py-5">
        <Col lg={12} className="py-2">
          {/* Título */}
          <SectionTitle title={title} />
          {/* Párrafos de texto */}
          {texts.map((text: string, index: number) => (
            <p key={index} className="lead">
              {text}
            </p>
          ))}
        </Col>
        {/* Subsecciones */}
        {subsections.map((subsection: any, index: number) => (
          <Col key={index} md={12} lg={6} className="py-2">
            <h3>{subsection.title}</h3>
            <p className="lead">{subsection.text}</p>
            {subsection.button !== undefined ? (
              <Button href={subsection.button.link} variant="outline-dark">
                {subsection.button.label} <Icon icon="chevron-right" />
              </Button>
            ) : (
              ""
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}
