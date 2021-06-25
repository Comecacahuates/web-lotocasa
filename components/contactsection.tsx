import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionContainer from "./ui/sectioncontainer";
import SubsectionCol from "./ui/subsectioncol";
import ListItem from "./ui/listitem";
import ContactForm from "./ui/contactform";
import {
  ContactSection,
  ContactFormSection,
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
  const contactFormSection: ContactFormSection =
    contactSection.contactFormSection;
  const meansOfContactSection: MeansOfContactSection =
    contactSection.meansOfContactSection;
  const addressSection: AddressSection = contactSection.addressSection;
  const openingHoursSection: OpeningHoursSection =
    contactSection.openingHoursSection;

  /* Renderización */
  return (
    <SectionContainer>
      <Row className="gx-5 py-3">
        <Col xs={12} lg={8}>
          <Row>
            {/* Formulario de contacto */}
            <SubsectionCol xs={12} title={contactFormSection.title}>
              <ContactForm contactForm={contactFormSection.contactForm} />
            </SubsectionCol>
          </Row>
        </Col>
        <Col xs={12} lg={4}>
          <Row>
            {/* Dirección */}
            <SubsectionCol xs={12} sm={6} lg={12} title={addressSection.title}>
              <address>
                <p>{addressSection.address}</p>
              </address>
            </SubsectionCol>
            {/* Horario de atención */}
            <SubsectionCol
              xs={12}
              sm={6}
              lg={12}
              title={openingHoursSection.title}
            >
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
            <SubsectionCol
              xs={12}
              sm={6}
              lg={12}
              title={meansOfContactSection.title}
            >
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
        </Col>
      </Row>
    </SectionContainer>
  );
}
