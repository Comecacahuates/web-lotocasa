import * as React from "react";
import PageBuilder from "../components/pagebuilder";

import content from "../content/carpasparaeventos.json";

/**
 * Componente de la página de carpas para eventos
 * @returns Componente
 */
export default function CarpasParaEventos() {
  /* Renderización */
  return <PageBuilder content={content} />;
}
