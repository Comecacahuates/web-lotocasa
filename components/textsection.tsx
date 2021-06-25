import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonLink from "./ui/buttonlink";
import SectionContainer from "./ui/sectioncontainer";
import SubsectionCol from "./ui/subsectioncol";
import { TextSection, ImageFigure } from "../@types/pagestructure";

/** Propiedades del componente de sección de texto */
export interface TextSectionProps {
  textSection: TextSection;
}

/** Componente de sección de texto */
export default function TextSectionUI(props: TextSectionProps) {
  /* Propiedades */
  const textSection: TextSection = props.textSection;
  const backgroundImage: ImageFigure | undefined = textSection.backgroundImage;
  const title: string | undefined = textSection.title;
  const id: string = textSection.id || "";
  const texts: string[] = textSection.texts;
  const subsections: TextSection[] = textSection.subsections || [];

  /* Renderización */
  return (
    <SectionContainer title={title} id={id} backgroundImage={backgroundImage}>
      {texts.length > 0 ? (
        <Row sm={1} md={2} className="gx-5 py-3">
          <Col className="py-2">
            {/* Párrafos de texto */}
            {texts.map((text: string, index: number) => (
              <p key={index} className="lead">
                {text}
              </p>
            ))}
          </Col>
        </Row>
      ) : (
        ""
      )}
      <Row xs={1} md={2} className="gx-5 py-3">
        {/* Subsecciones */}
        {subsections.map((subsection: TextSection, index: number) => (
          <SubsectionCol key={index} title={subsection.title}>
            {subsection.texts.map((text: string, index: number) => (
              <p key={index} className="lead">
                {text}
              </p>
            ))}
            {subsection.button !== undefined ? (
              <p>
                <ButtonLink href={subsection.button.href}>
                  {subsection.button.label}
                </ButtonLink>
              </p>
            ) : (
              ""
            )}
          </SubsectionCol>
        ))}
      </Row>
    </SectionContainer>
  );
}
