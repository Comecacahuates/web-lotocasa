/** Página */
export type Page = {
  route: string;
  title: string;
  displayTitle: boolean;
  sections: Section[];
};

/** Sección de una página */
export type Section = {
  sectionType: string;
  title?: string;
};

/** Sección de texto */
export type TextSection = Section & {
  sectionType: "textSection";
  id?: string;
  texts: string[];
  button?: ButtonLink;
  subsections?: TextSection[];
};

/** Sección de carrusel */
export type CarouselSection = Section & {
  sectionType: "carouselSection";
  carousel: CarouselFigure;
  wide: boolean;
};

/** Sección de clientes */
export type CustomersSection = Section & {
  sectionType: "customersSection";
  customersList: Customer[];
};

/** Sección de catálogo */
export type CatalogueSection = Section & {
  sectionType: "catalogueSection";
  items: CatalogueItem[];
};

/** Elemento de la sección de clientes */
export type Customer = {
  name: string;
  image: ImageFigure;
};

/** Figura */
export type Figure = {
  figureType: string;
};

/** Sección de contacto */
export type ContactSection = Section & {
  sectionType: "contactSection";
  meansOfContactSection: MeansOfContactSection;
  addressSection: AddressSection;
  openingHoursSection: OpeningHoursSection;
};

/** Sección de medios de contacto */
export type MeansOfContactSection = Section & {
  sectionType: "meansOfContactSection";
  meansOfContact: MeanOfContact[];
};

/** Sección de dirección */
export type AddressSection = Section & {
  sectionType: "addressSection";
  address: string;
};

/** Horarios de atención */
export type OpeningHoursSection = Section & {
  sectionType: "openingHours";
  openingHours: OpeningHours[];
};

/** Medios de contacto */
export type MeanOfContact = {
  name: string;
  icon: string;
  url: string;
};

/** Horario de atención */
export type OpeningHours = {
  days: string;
  hours: string;
};

/** Sección de mapa */
export type MapSection = Section & {
  sectionType: "mapSection";
  title: "Ubicación";
  src: string;
  height: string;
};

/** Figura de imagen */
export type ImageFigure = Figure & {
  figureType: "imageFigure";
  src: string;
  alt: string;
  cover: boolean;
  width?: number;
  height?: number;
};

/** Figura de carrusel */
export type CarouselFigure = Figure & {
  figureType: "carouselFigure";
  height: string;
  items: CarouselItem[];
};

/** Elemento de carrusel */
export type CarouselItem = {
  image: ImageFigure;
  caption?: Caption;
};

/** Elemento de catálogo */
export type CatalogueItem = {
  image: ImageFigure;
  caption: Caption;
};

/** Pie */
export type Caption = {
  title: string;
  text?: string;
  button?: ButtonLink;
};

/** Botón de enlace */
export type ButtonLink = {
  label: string;
  link: string;
};
