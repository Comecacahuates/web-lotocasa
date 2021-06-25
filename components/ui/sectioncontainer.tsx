import * as React from "react";
import Container, { ContainerProps } from "react-bootstrap/Container";
import Title from "./title";
import { ImageFigure } from "../../@types/pagestructure";
import Image from "./image";
import styles from "./sectioncontainer.module.scss";

/** Propiedades del componente de contenedor de sección */
export interface SectionContainerProps extends ContainerProps {
  title?: string;
  id?: string;
  backgroundImage?: ImageFigure;
  children?: React.ReactNode;
}

/** Componente de contenedor de sección */
export default function SectionContainer(props: SectionContainerProps) {
  /* Propiedades */
  const title: string | undefined = props.title;
  const id: string = props.id || "";
  const backgroundImage: ImageFigure | undefined = props.backgroundImage;
  const children: React.ReactNode | undefined = props.children;

  /* Clases */
  const outerDivClasses: string = backgroundImage ? styles.background : "";
  let containerClasses: string = `py-3 overflow-hidden ${styles.container}`;
  containerClasses += backgroundImage ? " text-light" : "";

  /* Renderización */
  return (
    <div className={outerDivClasses}>
      {backgroundImage ? <Image imageFigure={backgroundImage} /> : ""}
      <Container id={id} className={containerClasses} fluid="md" {...props}>
        {title ? <Title level={2}>{title}</Title> : ""}
        {children}
      </Container>
    </div>
  );
}
