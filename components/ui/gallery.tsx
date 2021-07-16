import * as React from "react";
import Carousel from "./carousel";
import GalleryList from "./gallerylist";
import { CarouselFigure, CarouselItem } from "../../@types/pagestructure";

/* Propiedades del componente de galería */
export interface GalleryProps {
  carousel: CarouselFigure;
}

/* Componente de galería */
export default function Gallery(props: GalleryProps) {
  /* Propiedades */
  const { carousel } = props;

  /* Estado */
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  /* Renderización */
  return (
    <React.Fragment>
      <Carousel
        carousel={carousel}
        activeIndex={activeIndex}
        indicators={false}
        onSelect={(index: number) => setActiveIndex(index)}
      />
      <GalleryList
        images={carousel.items.map((item: CarouselItem) => item.image)}
        onImageSelect={(index: number) => setActiveIndex(index)}
      />
    </React.Fragment>
  );
}
