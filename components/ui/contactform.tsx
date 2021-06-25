import * as React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Icon from "./icon";
import { ContactForm } from "../../@types/pagestructure";

/** Propiedades del componente de formulario de contacto */
export interface ContactFormProps {
  contactForm: ContactForm;
}

/** Componente de formulario de contacto */
export default function ContactFormUI(props: ContactFormProps) {
  /* Propiedades */
  const contactForm: ContactForm = props.contactForm;
  const action: string = contactForm.action;
  const nameLabel: string = contactForm.nameLabel;
  const emailLabel: string = contactForm.emailLabel;
  const messageLabel: string = contactForm.messageLabel;
  const subjectLabel: string = contactForm.subjectLabel;
  const next: string = contactForm.next;
  const cc: string | undefined = contactForm.cc;
  const captcha: boolean = contactForm.captcha;
  const template: string | undefined = contactForm.template;
  const submitLabel: string = contactForm.submitLabel;

  /* Renderización */
  return (
    <Form className="mb-3" action={action} method="POST">
      <input type="hidden" name="_subject" value="Test" />
      <input type="hidden" name="_captcha" value={captcha.toString()} />
      <input type="hidden" name="_next" value={next} />
      <Row>
        {/* Nombre */}
        <Form.Group className="mb-3" as={Col} xs={12} sm={6}>
          <Form.Label>{nameLabel}</Form.Label>
          <Form.Control name="name" />
        </Form.Group>
        {/* Correo */}
        <Form.Group className="mb-3" as={Col} xs={12} sm={6}>
          <Form.Label>{emailLabel}</Form.Label>
          <Form.Control type="email" name="email" />
        </Form.Group>
        {/* Asunto */}
        <Form.Group className="mb-3" as={Col} xs={12}>
          <Form.Label>{subjectLabel}</Form.Label>
          <Form.Control name="subject" />
        </Form.Group>
      </Row>
      {/* Mensaje */}
      <Form.Group className="mb-3">
        <Form.Label>{messageLabel}</Form.Label>
        <Form.Control as="textarea" name="message" rows={5} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {submitLabel} <Icon icon="arrow-right" />
      </Button>
    </Form>
  );
}
