import * as React from "react";
import Image from "next/image";
import Icon from "./icon";
import { ImageFigure } from "../../@types/pagestructure";
import styles from "./gallerylist.module.scss";

/* Propiedades del componente de lista de galería */
export interface GalleryListProps {
  images: ImageFigure[];
  onImageSelect: (index: number) => void;
}

/* Componente de lista de galería */
export default function GalleryList(props: GalleryListProps) {
  /* Propiedades */
  const { images, onImageSelect } = props;

  /* Renderización */
  return (
    <div className="w-100 d-flex">
      {/* Imágenes */}
      <div className={`flex-grow-1 d-flex overflow-auto ${styles.container}`}>
        {images.map((image: ImageFigure, index: number) => (
          <div
            key={index}
            className={`position-relative flex-shrink-0 ${styles.item}`}
          >
            <Image
              role="button"
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              className={styles.img}
              onClick={() => onImageSelect(index)}
            />
          </div>
        ))}
      </div>
      {/* Botón izquierda */}
      <div className="order-first flex-shrink-0 p-2">
        <div className="h-100 d-flex align-items-center">
          <Icon icon="chevron-left" role="button" className="fs-3" />
        </div>
      </div>
      {/* Botón derecha */}
      <div className="order-last flex-shrink-0 p-2">
        <div className="h-100 d-flex align-items-center">
          <Icon icon="chevron-right" role="button" className="fs-3" />
        </div>
      </div>
    </div>
  );
}
