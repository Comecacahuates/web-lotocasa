import * as React from "react";

/**
 * Propiedades del componente de ícono
 */
export interface IconProps {
  /* Ícono */
  icon: string;
}

/**
 * Componente de ícono
 * @param {IconProps} props Propiedades
 * @returns Componente
 */
export default function Icon(props: IconProps) {
  /* Propiedades */
  const icon: string = props.icon;

  /* Renderización */
  return <i className={`bi bi-${icon}`} />;
}
