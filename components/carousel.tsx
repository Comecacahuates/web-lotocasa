/** @jsxImportSource @emotion/react */
import * as React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
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
        <Carousel.Item
          key={index}
          css={css`
            height: ${carousel.height};
          `}
        >
          {/* Imagen */}
          <Image
            src={item.image.src}
            className={`d-block w-100`}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
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
