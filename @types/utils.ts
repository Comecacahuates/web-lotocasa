/** Página */
export type PageContent = {
  route: string;
  title: string;
  displayTitle: boolean;
  sections: SectionContent[];
};

/** Sección de una página */
export type SectionContent = {
  sectionType: string;
  title?: string;
};

/** Sección de texto */
export type TextSectionContent = SectionContent & {
  sectionType: "textSection";
  id?: string;
  texts: string[];
  button?: ButtonLinkContent;
  subsections?: TextSectionContent[];
};

/** Sección de carrusel */
export type CarouselSectionContent = SectionContent & {
  sectionType: "carouselSection";
  carousel: CarouselFigureContent;
  wide: boolean;
};

/** Sección de clientes */
export type CustomersSectionContent = SectionContent & {
  sectionType: "customersSection";
  customersList: CustomerContent[];
};

/** Sección de catálogo */
export type CatalogueSectionContent = SectionContent & {
  sectionType: "catalogueSection";
  items: CatalogueItemContent[];
};

/** Elemento de la sección de clientes */
export type CustomerContent = {
  name: string;
  image: ImageFigureContent;
};

/** Figura */
export type FigureContent = {
  figureType: string;
};

/** Figura de imagen */
export type ImageFigureContent = FigureContent & {
  figureType: "imageFigure";
  src: string;
  alt: string;
  cover: boolean;
  width?: number;
  height?: number;
};

/** Figura de carrusel */
export type CarouselFigureContent = FigureContent & {
  figureType: "carouselFigure";
  height: string;
  items: CarouselItemContent[];
};

/** Elemento de carrusel */
export type CarouselItemContent = {
  image: ImageFigureContent;
  caption?: CaptionContent;
};

/** Elemento de catálogo */
export type CatalogueItemContent = {
  image: ImageFigureContent;
  caption: CaptionContent;
};

/** Pie */
export type CaptionContent = {
  title: string;
  text?: string;
  button?: ButtonLinkContent;
};

/** Botón de enlace */
export type ButtonLinkContent = {
  label: string;
  link: string;
};
