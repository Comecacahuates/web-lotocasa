import * as React from "react";
import PageBuilder from "../components/pagebuilder";

import content from "../content/carpasindustriales.json";

/**
 * Componente de la página de carpas industriales
 * @returns Componente
 */
export default function CarpasIndustriales() {
  /* Renderización */
  return <PageBuilder content={content} />;
}
