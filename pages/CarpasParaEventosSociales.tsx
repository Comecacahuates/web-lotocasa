import * as React from "react";
import PageBuilder from "../components/pagebuilder";
import { Page } from "../@types/pagestructure";

import page from "../content/carpasparaeventossociales.json";

/** Componente de la página de carpas para eventos sociales */
export default function CarpasParaEventosSociales() {
  /* Renderización */
  return <PageBuilder page={page as Page} />;
}
