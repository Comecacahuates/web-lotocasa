import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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
  const successModalTitle: string = contactSection.formSubmittedModalTitle;
  const successModalBody: string = contactSection.formSubmittedModalBody;
  const errorModalTitle: string = contactSection.formSubmittedModalErrorTitle;
  const errorModalBody: string = contactSection.formSubmittedModalErrorBody;
  const meansOfContactSection: MeansOfContactSection =
    contactSection.meansOfContactSection;
  const addressSection: AddressSection = contactSection.addressSection;
  const openingHoursSection: OpeningHoursSection =
    contactSection.openingHoursSection;

  /* Estado */
  const [modalShow, setModalShow] = React.useState<boolean>(false);
  const [modalTitle, setModalTitle] = React.useState<string>("");
  const [modalBody, setModalBody] = React.useState<string>("");

  /* Evento de formulario enviado */
  const formSubmittedHandler = (success: boolean) => {
    if (success) {
      setModalTitle(successModalTitle);
      setModalBody(successModalBody);
    } else {
      setModalTitle(errorModalTitle);
      setModalBody(errorModalBody);
    }
    setModalShow(true);
  };

  /* Renderización */
  return (
    <SectionContainer>
      <Row className="gx-5 py-3">
        <Col xs={12} lg={8}>
          <Row>
            {/* Formulario de contacto */}
            <SubsectionCol xs={12} title={contactFormSection.title}>
              <ContactForm
                contactForm={contactFormSection.contactForm}
                onFormSubmitted={formSubmittedHandler}
              />
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
      {/* Modal de formulario de contacto */}
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setModalShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </SectionContainer>
  );
}
