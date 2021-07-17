/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { ImageFigure } from "../../@types/pagestructure";

/** Propiedades del componente */
export interface ImageProps {
  imageFigure: ImageFigure;
}

/** Componente de imagen */
export default function ImageUI(props: ImageProps) {
  /* Propiedades */
  const { src, alt, cover, width, height }: ImageFigure = props.imageFigure;

  /* Renderización */
  if (cover) {
    return (
      <Image
        src={src}
        alt={alt}
        className="d-block w-100"
        layout="fill"
        objectFit="cover"
        objectPosition="center top"
      />
    );
  } else {
    return (
      <Image
        src={{ src: src, height: height!, width: width! }}
        alt={alt}
        width={width}
        height={height}
        css={css`
          object-fit: cover;
          object-position: center center;
        `}
      />
    );
  }
}
