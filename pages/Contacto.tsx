import * as React from "react";
import PageBuilder from "../components/pagebuilder";
import { Page } from "../@types/pagestructure";

import page from "../content/contacto.json";

/** Componente de la página de contacto */
export default function Contacto() {
  /* Renderización */
  return <PageBuilder page={page as Page} />;
}
