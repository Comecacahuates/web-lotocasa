import * as React from "react";
import SectionContainer from "./ui/sectioncontainer";
import Gallery from "./ui/gallery";
import { GallerySection } from "../@types/pagestructure";

/* Propiedades del componente de sección de galería */
export interface GallerySectionProps {
  gallerySection: GallerySection;
}

/* Componente de sección de galería */
export default function GallerySectionUI(props: GallerySectionProps) {
  /* Propiedades */
  const gallerySection: GallerySection = props.gallerySection;
  const { title, carousel } = gallerySection;

  /* Renderización */
  return (
    <SectionContainer title={title}>
      <Gallery carousel={carousel} />
    </SectionContainer>
  );
}
