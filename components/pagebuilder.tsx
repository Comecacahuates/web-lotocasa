import * as React from "react";
import Head from "next/head";
import Layout from "./layout";
import SectionContainer from "./ui/sectioncontainer";
import Title from "./ui/title";
import CarouselSectionUI from "./carouselsection";
import TextSectionUI from "./textsection";
import CatalogueSectionUI from "./cataloguesection";
import CustomersSectionUI from "./customerssection";
import ContactSectionUI from "./contactsection";
import MapSectionUI from "./mapsection";
import {
  Page,
  Section,
  CarouselSection,
  TextSection,
  CatalogueSection,
  CustomersSection,
  ContactSection,
  MapSection,
} from "../@types/pagestructure";

/** Propiedades del componente de contrucción de página */
export interface PageBuilderProps {
  page: Page;
}

/** Componente de construcción de página */
export default function PageBuilder(props: PageBuilderProps) {
  /* Propiedades */
  const page: Page = props.page;
  const route: string = page.route;
  const title: string = page.title;
  const displayTitle: boolean = page.displayTitle || false;
  const sectionsContent: Section[] = page.sections;

  /* Renderización */
  return (
    <Layout pageTitle={title} route={route}>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Título */}
      {displayTitle ? (
        <SectionContainer backgroundImage={page.titleBackgroundImage}>
          <Title level={1}>{title}</Title>
        </SectionContainer>
      ) : (
        ""
      )}
      {/* Secciones */}
      {sectionsContent.map((section: Section, index: number) => {
        /* Sección de carrusel */
        if (section.sectionType === "carouselSection") {
          return (
            <CarouselSectionUI
              key={index}
              carouselSection={section as CarouselSection}
            />
          );
        }
        /* Sección de texto */
        if (section.sectionType === "textSection") {
          return (
            <TextSectionUI key={index} textSection={section as TextSection} />
          );
        }
        /* Sección de catálogo */
        if (section.sectionType === "catalogueSection") {
          return (
            <CatalogueSectionUI
              key={index}
              catalogueSection={section as CatalogueSection}
            />
          );
        }
        /* Sección de clientes */
        if (section.sectionType === "customersSection") {
          return (
            <CustomersSectionUI
              key={index}
              customersSection={section as CustomersSection}
            />
          );
        }
        /* Sección de contacto */
        if (section.sectionType === "contactSection") {
          return (
            <ContactSectionUI
              key={index}
              contactSection={section as ContactSection}
            />
          );
        }
        /* Sección de mapa */
        if (section.sectionType === "mapSection") {
          return (
            <MapSectionUI key={index} mapSection={section as MapSection} />
          );
        }
      })}
    </Layout>
  );
}
