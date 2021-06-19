import * as React from "react";
import Map from "../components/map";

/**
 * Propiedades del coponente de sección de mapa
 */
export interface MapSectionProps {
  /* Contenido */
  content: any;
}

/**
 * Componente de sección de mapa
 * @param {MapSectionProps} props Propiedades
 * @returns Componente
 */
export default function MapSection(props: MapSectionProps) {
  /* Propiedades */
  const content: any = props.content;
  const title: string = content.title;
  const src: string = content.src;
  const height: string = content.height;

  /* Renderización */
  return (
    <React.Fragment>
      <h3 className="mb-3 ps-4">{title}</h3>
      <Map src={src} height={height} />
    </React.Fragment>
  );
}
