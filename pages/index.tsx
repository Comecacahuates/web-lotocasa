import * as React from "react";
import PageBuilder from "../components/pagebuilder";

import content from "../content/index.json";

/**
 * Componente de la página de inicio
 * @returns Componente
 */
export default function Home() {
  /* Renderización */
  return <PageBuilder content={content} />;
}
