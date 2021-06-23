import * as React from "react";
import PageBuilder from "../components/pagebuilder";
import { Page } from "../@types/pagestructure";

import page from "../content/carpasparaeventos.json";

/** Componente de la página de carpas para eventos */
export default function CarpasParaEventos() {
  /* Renderización */
  return <PageBuilder page={page as Page} />;
}
