import * as React from "react";
import PageBuilder from "../components/pagebuilder";
import { Page } from "../@types/pagestructure";

import page from "../content/carpasparaeventoscomercialesyexposiciones.json";

/** Componente de la página de inicio */
export default function CarpasParaEventosComercialesYExposiciones() {
  /* Renderización */
  return <PageBuilder page={page as Page} />;
}
