import * as React from "react";
import Button from "react-bootstrap/Button";
import Icon from "./icon";

/** Tipos de variantes de botón */
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

/** Propiedades */
export interface ButtonLinkProps {
  href: string;
  children: string;
  variant?: ButtonVariant;
  outline?: boolean;
}

/** Componente de botón de enlace */
export default function ButtonLinkUI(props: ButtonLinkProps) {
  /* Propiedades */
  const href: string = props.href;
  const variant: ButtonVariant = props.variant || "primary";
  const outline: boolean = props.outline || false;
  const children: string = props.children;

  /* Renderización */
  return (
    <Button href={href} variant={`${outline ? "outline-" : ""}${variant}`}>
      {children} <Icon icon="chevron-right" />
    </Button>
  );
}
