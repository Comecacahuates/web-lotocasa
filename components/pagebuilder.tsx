import * as React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import PageTitle from "../components/pagetitle";
import Carousel from "../components/carousel";
import TextSection from "../components/textsection";
import CustomersSection from "../components/customerssection";
import ContactSection from "../components/contactsection";

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
    <Layout pageTitle={content.title} route={content.route}>
      <Head>
        <title>{content.title}</title>
      </Head>
      {/* Título */}
      {displayTitle ? <PageTitle title={content.title} /> : ""}
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
        if (section.type === "contact") {
          return <ContactSection key={index} content={section} />;
        }
      })}
    </Layout>
  );
}
