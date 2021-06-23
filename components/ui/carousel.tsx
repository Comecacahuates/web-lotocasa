/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import Carousel from "react-bootstrap/Carousel";
import Image from "./image";
import ButtonLink from "./buttonlink";
import { CarouselFigure, CarouselItem } from "../@types/pagestructure";

/** Propiedades del componente de carrusel */
export interface CarouselProps {
  carousel: CarouselFigure;
}

/** Componente de carrusel */
export default function CarouselUI(props: CarouselProps) {
  /* Propiedades */
  const carousel: CarouselFigure = props.carousel;
  const height: string = carousel.height;
  const items: CarouselItem[] = carousel.items;

  /* Renderización */
  return (
    <Carousel>
      {items.map((item: CarouselItem, index: number) => (
        <Carousel.Item
          key={index}
          css={css`
            height: ${height};
          `}
        >
          {/* Imagen */}
          <Image imageFigureContent={item.image} />
          {/* Título y pie */}
          {item.caption !== undefined ? (
            <Carousel.Caption>
              <h1 className="display-3">{item.caption.title}</h1>
              <p className="h4">{item.caption.text}</p>
              {item.caption.button !== undefined ? (
                <ButtonLink buttonLinkContent={item.caption.button} />
              ) : (
                ""
              )}
            </Carousel.Caption>
          ) : (
            ""
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
