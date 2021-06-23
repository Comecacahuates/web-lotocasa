/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { ImageFigureContent } from "../@types/utils";

/** Propiedades del componente */
export interface ImageProps {
  imageFigureContent: ImageFigureContent;
}

/** Componente de imagen */
export default function (props: ImageProps) {
  /* Propiedades */
  const { src, alt, cover, width, height }: ImageFigureContent =
    props.imageFigureContent;

  /* Renderización */
  if (cover) {
    return (
      <Image
        src={src}
        alt={alt}
        className="d-block w-100"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
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
          object-position: 50% 50%;
        `}
      />
    );
  }
}
