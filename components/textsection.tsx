import * as React from "react";
import ReactMarkdown from "react-markdown";
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
  const {
    backgroundImage,
    title,
    id,
    texts,
    button,
    subsections,
  }: TextSection = props.textSection;

  /* Clases */
  const bgAuxClass: string = backgroundImage ? "bg-aux" : "";

  /* Renderización */
  return (
    <SectionContainer title={title} id={id} backgroundImage={backgroundImage}>
      {texts.length > 0 ? (
        <Row className="gx-5 py-3">
          <Col className="py-2" md={12} lg={8}>
            {/* Párrafos de texto */}
            {texts.map((text: string, index: number) => (
              <ReactMarkdown
                key={index}
                components={{
                  p: ({ node, children, ...props }) => (
                    <p className="lead" {...props}>
                      <span className={bgAuxClass}>{children}</span>
                    </p>
                  ),
                }}
              >
                {text}
              </ReactMarkdown>
            ))}
            {button !== undefined ? (
              <p>
                <ButtonLink href={button.href}>{button.label}</ButtonLink>
              </p>
            ) : (
              ""
            )}
          </Col>
        </Row>
      ) : (
        ""
      )}
      {subsections ? (
        <Row xs={1} md={2} className="gx-5 py-3">
          {/* Subsecciones */}
          {subsections.map((subsection: TextSection, index: number) => (
            <SubsectionCol
              key={index}
              title={subsection.title}
              hasBackgroundImage={backgroundImage !== undefined}
            >
              {subsection.texts.map((text: string, index: number) => (
                <ReactMarkdown
                  key={index}
                  components={{
                    p: ({ node, children, ...props }) => (
                      <p className="lead" {...props}>
                        <span className={bgAuxClass}>{children}</span>
                      </p>
                    ),
                  }}
                >
                  {text}
                </ReactMarkdown>
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
      ) : (
        ""
      )}
    </SectionContainer>
  );
}
