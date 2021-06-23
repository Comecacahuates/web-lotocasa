/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";

/**
 * Propiedades del componente de mapa
 */
export interface MapProps {
  /* Fuente */
  src: string;
  /* Altura */
  height: string;
}

/**
 * Componente de mapa
 * @param {MapProps} props Propiedades
 * @returns Componente
 */
export default function Map(props: MapProps) {
  /* Propiedades */
  const src: string = props.src;
  const height: string = props.height;

  /* Renderización */
  return (
    <iframe
      src={src}
      width="100%"
      height={height}
      loading="lazy"
      css={css`
        border: 0;
      `}
    />
  );
}
