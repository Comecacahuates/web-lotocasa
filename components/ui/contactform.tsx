import * as React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Icon from "./icon";
import { ContactForm } from "../../@types/pagestructure";
import { Formik } from "formik";
import * as Yup from "yup";

/** Propiedades del componente de formulario de contacto */
export interface ContactFormProps {
  contactForm: ContactForm;
}

/** Esquema de validación */
const validationSchema = Yup.object({
  name: Yup.string()
    .max(50, "El nombre no puede ser mayor a 50 carácteres")
    .required("El nombre es requerido"),
  email: Yup.string()
    .email("La dirección de correo no es válida")
    .required("El correo electrónico es requerido"),
  subject: Yup.string()
    .max(100, "El asunto no puede ser mayor a 100 carácteres")
    .required("El asunto es requerido"),
  message: Yup.string()
    .min(30, "El mensaje es muy corto")
    .max(1000, "El mensaje debe ser mayor a 1000 carácteres")
    .required("El mensaje no puede estar vacío"),
});

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
    <Formik
      validationSchema={validationSchema}
      initialValues={{ name: "", email: "", subject: "", message: "", next }}
      /* TODO: Enviar el formulario */
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      {({ handleSubmit, values, touched, errors, getFieldProps }) => (
        <Form className="mb-3" noValidate onSubmit={handleSubmit}>
          <Row>
            {/* Nombre */}
            <Form.Group className="mb-3" as={Col} xs={12} sm={6}>
              <Form.Label>{nameLabel}</Form.Label>
              <Form.Control
                value={values.name}
                {...getFieldProps("name")}
                isInvalid={touched.name && !!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Correo */}
            <Form.Group className="mb-3" as={Col} xs={12} sm={6}>
              <Form.Label>{emailLabel}</Form.Label>
              <Form.Control
                type="email"
                value={values.email}
                {...getFieldProps("email")}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          {/* Asunto */}
          <Form.Group className="mb-3" as={Col} xs={12}>
            <Form.Label>{subjectLabel}</Form.Label>
            <Form.Control
              type="text"
              value={values.subject}
              {...getFieldProps("subject")}
              isInvalid={touched.subject && !!errors.subject}
            />
            <Form.Control.Feedback type="invalid">
              {errors.subject}
            </Form.Control.Feedback>
          </Form.Group>
          {/* Mensaje */}
          <Form.Group className="mb-3">
            <Form.Label>{messageLabel}</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={values.message}
              {...getFieldProps("message")}
              isInvalid={touched.message && !!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            {submitLabel} <Icon icon="chevron-right" />
          </Button>
        </Form>
      )}
    </Formik>
  );
}
