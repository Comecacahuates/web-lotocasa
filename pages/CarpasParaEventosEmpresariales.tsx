import * as React from "react";
import PageBuilder from "../components/pagebuilder";
import { Page } from "../@types/pagestructure";

import page from "../content/carpasparaeventosempresariales.json";

/** Componente de la página de inicio */
export default function CarpasParaEventosEmpresariales() {
  /* Renderización */
  return <PageBuilder page={page as Page} />;
}
