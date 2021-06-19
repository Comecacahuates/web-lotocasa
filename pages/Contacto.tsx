import * as React from "react";
import PageBuilder from "../components/pagebuilder";

import content from "../content/contacto.json";

/**
 * Componente de la página de contacto
 * @returns Componente
 */
export default function Contacto() {
  /* Renderización */
  return <PageBuilder content={content} />;
}
