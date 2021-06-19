import * as React from "react";

/**
 * Propiedades del componente de título de sección
 */
export interface SectionTitleProps {
  /* Título */
  title: string;
}

/**
 * Componente de título de sección
 * @props {SectionTitleProps} props Propiedades
 * @returns Componente
 */
export default function SectionTitle(props: SectionTitleProps) {
  /* Propiedades */
  const title: string = props.title;

  /* Renderización */
  return <h2 className="display-5 my-3">{title}</h2>;
}
