import * as React from "react";
import PageBuilder from "../components/pagebuilder";
import { Page } from "../@types/pagestructure";

import page from "../content/carpasindustriales.json";

/** Componente de la página de carpas industriales */
export default function CarpasIndustriales() {
  /* Renderización */
  return <PageBuilder page={page as Page} />;
}
