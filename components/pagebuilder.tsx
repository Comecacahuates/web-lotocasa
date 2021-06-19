import * as React from "react";
import Carousel from "../components/carousel";
import TextSection from "../components/textsection";
import CustomersSection from "../components/customerssection";

/**
 * Propiedades del componente de contrucción de página
 */
export interface PageBuilder {
  /* Contenido */
  content: any;
}

/**
 * Componente de construcción de página
 * @param {PageBuilderProps} props Propiedades
 * @return Componente
 */
export default function PageBuilder(props: PageBuilder) {
  /* Propiedades */
  const content: any = props.content;
  const displayTitle: boolean = content.displayTitle || false;
  const sections: any = content.sections;

  /* Renderización */
  return (
    <React.Fragment>
      {/* Secciones */}
      {sections.map((section: any, index: number) => {
        if (section.type === "carousel") {
          return <Carousel key={index} carousel={section} />;
        }
        if (section.type === "text") {
          return <TextSection key={index} content={section} />;
        }
        if (section.type === "customers") {
          return <CustomersSection key={index} content={section} />;
        }
      })}
    </React.Fragment>
  );
}
