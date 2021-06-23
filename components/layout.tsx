import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

/**
 * Propiedades del componente de formato de las páginas
 */
export interface LayoutProps {
  /* Título de la página */
  pageTitle: string;
  /* Ruta de la página */
  route: string;
  /* Contenido */
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  /* Propiedades */
  const pageTitle: string = props.pageTitle;
  const route: string = props.route;
  const children: React.ReactNode = props.children;

  /* Renderización */
  return (
    <div>
      <Navbar activeItem={route} />
      {children}
      <Footer />
    </div>
  );
}
