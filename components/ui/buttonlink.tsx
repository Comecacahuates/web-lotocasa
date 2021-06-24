import * as React from "react";
import Button from "react-bootstrap/Button";
import Icon from "./icon";
import { ButtonLink } from "../../@types/pagestructure";

/** Propiedades */
export interface ButtonLinkProps {
  href: string;
  children: string;
  dark?: boolean;
}

/** Componente de botón de enlace */
export default function ButtonLinkUI(props: ButtonLinkProps) {
  /* Propiedades */
  const href: string = props.href;
  const variant: "light" | "dark" = props.dark ? "dark" : "light";
  const children: string = props.children;

  /* Renderización */
  return (
    <Button href={href} variant={`outline-${variant}`}>
      {children} <Icon icon="chevron-right" />
    </Button>
  );
}
