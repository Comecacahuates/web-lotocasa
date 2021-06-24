import * as React from "react";
import Container from "react-bootstrap/Container";
import Title from "./title";
import { ImageFigure } from "../../@types/pagestructure";
import Image from "./image";
import styles from "./sectioncontainer.module.scss";

/** Propiedades del componente de contenedor de sección */
export interface SectionContainerProps {
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

  /* Renderización */
  return (
    <div className={backgroundImage !== undefined ? styles.background : ""}>
      {backgroundImage !== undefined ? (
        <Image imageFigure={backgroundImage} />
      ) : (
        ""
      )}
      <Container
        id={id}
        className={`py-3 overflow-hidden ${styles.container}`}
        fluid="md"
      >
        {title ? <Title level={2}>{title}</Title> : ""}
        {children}
      </Container>
    </div>
  );
}
