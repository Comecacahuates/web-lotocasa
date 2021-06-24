import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionContainer from "./ui/sectioncontainer";
import CatalogueItemUI from "./ui/catalogueitem";
import { CatalogueSection, CatalogueItem } from "../@types/pagestructure";

/** Propiedades del componente de sección de catálogo */
export interface CatalogueSectionProps {
  catalogueSection: CatalogueSection;
}

/** Componente de seccipon de catálogo */
export default function CatalogueSectionUI(props: CatalogueSectionProps) {
  /* Propiedades */
  const catalogueSection: CatalogueSection = props.catalogueSection;
  const title: string | undefined = catalogueSection.title;
  const items: CatalogueItem[] = catalogueSection.items;

  /* Renderización */
  return (
    <SectionContainer title={title}>
      <Row xs={1} md={2} xl={3} className="py-3 gx-4 gy-2">
        {items.map((item: CatalogueItem, index: number) => (
          <Col key={index}>
            <CatalogueItemUI key={index} catalogueItem={item} />
          </Col>
        ))}
      </Row>
    </SectionContainer>
  );
}
