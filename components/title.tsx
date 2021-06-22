import * as React from "react";

/** Propiedades */
export interface TitleProps {
  children: React.ReactNode;
  level: number;
}

/** Componente de título */
export default function Title(props: TitleProps) {
  /* Propiedades */
  const children: React.ReactNode = props.children;
  const level: number = props.level;

  /* Renderización */
  if (level === 1) {
    return <h1 className="display-2 mt-5">{children}</h1>;
  } else if (level === 2) {
    return <h2 className="display-5 my-3">{children}</h2>;
  } else if (level === 3) {
    return <h3>{children}</h3>;
  } else {
    return <React.Fragment />;
  }
}
