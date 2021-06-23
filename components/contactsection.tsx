import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SubsectionCol from "./ui/subsectioncol";
import ListItem from "./ui/listitem";
import {
  ContactSection,
  MeansOfContactSection,
  MeanOfContact,
  AddressSection,
  OpeningHoursSection,
  OpeningHours,
} from "../@types/pagestructure";

/** Propiedades del componente de sección de contacto */
export interface ContactSectionProps {
  contactSection: ContactSection;
}

/** Componente de sección de contacto */
export default function ContactSectionUI(props: ContactSectionProps) {
  /* Propiedades */
  const contactSection: ContactSection = props.contactSection;
  const meansOfContactSection: MeansOfContactSection =
    contactSection.meansOfContactSection;
  const addressSection: AddressSection = contactSection.addressSection;
  const openingHoursSection: OpeningHoursSection =
    contactSection.openingHoursSection;

  /* Renderización */
  return (
    <Container>
      <Row className="gx-5 py-5" sm={1} md={2} lg={3}>
        {/* Dirección */}
        <SubsectionCol title={addressSection.title}>
          <p>{addressSection.address}</p>
        </SubsectionCol>
        {/* Horario de atención */}
        <SubsectionCol title={openingHoursSection.title}>
          {openingHoursSection.openingHours.map(
            (item: OpeningHours, index: number) => (
              <React.Fragment key={index}>
                <dt>{item.days}</dt>
                <dd>{item.hours}</dd>
              </React.Fragment>
            )
          )}
        </SubsectionCol>
        {/* Medios de contacto */}
        <SubsectionCol title={meansOfContactSection.title}>
          <ul className="list-unstyled text-small">
            {meansOfContactSection.meansOfContact.map(
              (item: MeanOfContact, index: number) => (
                <ListItem key={index} href={item.url} icon={item.icon}>
                  {item.name}
                </ListItem>
              )
            )}
          </ul>
        </SubsectionCol>
      </Row>
    </Container>
  );
}
