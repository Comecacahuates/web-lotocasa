/** @jsxImportSource @emotion/react */
import * as React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Icon from "../components/icon";

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
    <Container className="p-0" fluid={carousel.wide || false}>
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
            {item.caption !== undefined ? (
              <Carousel.Caption>
                <h1 className="display-3">{item.caption.title}</h1>
                <p className="h4">{item.caption.text}</p>
                <Button href={item.caption.button.link} variant="outline-light">
                  {item.caption.button.label} <Icon icon="chevron-right" />
                </Button>
              </Carousel.Caption>
            ) : (
              ""
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
