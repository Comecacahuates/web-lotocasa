import * as React from "react";

/** Propiedades del componente de ícono */
export interface IconProps extends React.HTMLProps<HTMLElement> {
  /* Ícono */
  icon: string;
}

/** Componente de ícono */
export default function Icon(props: IconProps) {
  /* Propiedades */
  const { icon, ...elementProps } = props;
  const { className, ...iProps } = elementProps;

  /* Renderización */
  return <i className={`bi bi-${icon} ${className}`} {...iProps} />;
}
