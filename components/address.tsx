import * as React from "react";

/**
 * Propiedades del componente de sección de dirección
 */
export interface AddressProps {
  /* Contenido */
  content: any;
}

/**
 * Componente de sección de dirección
 * @param{AddressProps} props Propiedades
 * @returns Componente
 */
export default function Address(props: AddressProps) {
  /* Propiedades */
  const content: any = props.content;
  const title: string = content.title;
  const address: string = content.value;

  /* Renderización */
  return (
    <React.Fragment>
      <h3 className="mb-3">{title}</h3>
      <p className="my-2">{address}</p>
    </React.Fragment>
  );
}
