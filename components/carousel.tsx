/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css, jsx } from "@emotion/react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

/**
 * Propiedades del componente de carrusel
 */
export interface CarouselProps {
  /* Contenido del carrusel */
  carousel: any;
}

/**
 * Componente de carrusel
 * @param {CarouselProps} props Propiedades
 * @returns Componente
 */
export default function (props: CarouselProps) {
  /* Propiedades */
  const carousel: any = props.carousel;

  /* Renderización */
  return (
    <Carousel>
      {carousel.items.map((item: any, index: number) => (
        <Carousel.Item key={index}>
          {/* Imagen */}
          <div
            css={css`
              background-image: url(${item.imageUrl});
              height: ${carousel.height};
            `}
          />
          {/* Título y pie */}
          <Carousel.Caption>
            <h1 className="display-3">{item.title}</h1>
            <p className="h4">{item.caption}</p>
            <Button href={item.button.link} variant="outline-light">
              {item.button.label} <i className="bi bi-chevron-right"></i>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
