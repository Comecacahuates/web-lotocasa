import * as React from "react";
import PageBuilder from "../components/pagebuilder";
import { Page } from "../@types/";

import page from "../content/carpasparaalmacenes.json";

/** Componente de la página de inicio */
export default function CarpasParaAlmacenes() {
  /* Renderización */
  return <PageBuilder page={page as Page} />;
}
