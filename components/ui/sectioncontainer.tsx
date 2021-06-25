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
  const { title, id, backgroundImage, children, ...containerProps } = props;

  /* Clases */
  const outerDivClasses: string = backgroundImage ? styles.background : "";
  let containerClasses: string = `py-3 overflow-hidden ${styles.container}`;
  containerClasses += backgroundImage ? " text-light" : "";
  const bgAuxClass: string = backgroundImage ? "bg-aux" : "";

  /* Renderización */
  return (
    <div className={outerDivClasses}>
      {backgroundImage ? <Image imageFigure={backgroundImage} /> : ""}
      <Container
        id={id}
        className={containerClasses}
        fluid="md"
        {...containerProps}
      >
        {title ? (
          <Title level={2}>
            <span className={bgAuxClass}>{title}</span>
          </Title>
        ) : (
          ""
        )}
        {children}
      </Container>
    </div>
  );
}
