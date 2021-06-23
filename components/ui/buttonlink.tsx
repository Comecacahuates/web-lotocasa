import * as React from "react";
import Button from "react-bootstrap/Button";
import Icon from "./icon";
import { ButtonLinkContent } from "../../@types/utils";

/** Propiedades */
export interface ButtonLinkProps {
  buttonLinkContent: ButtonLinkContent;
}

/** Componente de botón de enlace */
export default function (props: ButtonLinkProps) {
  /* Propiedades */
  const buttonLinkContent: ButtonLinkContent = props.buttonLinkContent;
  const label: string = buttonLinkContent.label;
  const link: string = buttonLinkContent.link;

  /* Renderización */
  return (
    <Button href={link} variant="outline-light">
      {label} <Icon icon="chevron-right" />
    </Button>
  );
}
