import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import PageBuilder from "../components/pagebuilder";

import content from "../content/index.json";

/**
 * Componente de la página de inicio
 * @returns Componente
 */
export default function Home() {
  /* Contenido */

  return (
    <Layout pageTitle="Inicio" route="/">
      <Head>
        <title>{content.title}</title>
      </Head>
      <PageBuilder content={content} />
    </Layout>
  );
}
