/** @jsxImportSource @emotion/react */
import * as React from "react";
import Carousel, { CarouselProps } from "react-bootstrap/Carousel";
import Image from "./image";
import ButtonLink from "./buttonlink";
import { CarouselFigure, CarouselItem } from "../../@types/pagestructure";
import styles from "./carousel.module.scss";

/** Propiedades del componente de carrusel */
export interface CarouselUIProps extends CarouselProps {
  carousel: CarouselFigure;
}

/** Componente de carrusel */
export default function CarouselUI(props: CarouselUIProps) {
  /* Propiedades */
  const { carousel, ...carouselProps } = props;
  const wide: boolean = carousel.wide;
  const items: CarouselItem[] = carousel.items;

  /* Renderización */
  return (
    <Carousel {...carouselProps}>
      {items.map((item: CarouselItem, index: number) => (
        <Carousel.Item
          key={index}
          className={wide ? styles.carouselitemwide : styles.carouselitem}
        >
          {/* Imagen */}
          <Image imageFigure={item.image} />
          {/* Título y pie */}
          {item.caption !== undefined ? (
            <Carousel.Caption>
              <h1 className="display-3">
                <span className="bg-aux">{item.caption.title}</span>
              </h1>
              <p className="h4">
                <span className="bg-aux">{item.caption.text}</span>
              </p>
              {item.caption.button !== undefined ? (
                <p>
                  <ButtonLink href={item.caption.button.href}>
                    {item.caption.button.label}
                  </ButtonLink>
                </p>
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
