import * as React from "react";
import Icon from "../components/icon";

/**
 * Propiedades del componente de sección de medios de contacto
 */
export interface MeansOfContactProps {
  /* Contenido */
  content: any;
}

/**
 * Componente de sección de medios de contacto
 * @param {MeansOfContactProps} props Propiedades
 * @returns Componente
 */
export default function MeansOfContact(props: MeansOfContactProps) {
  /* Propiedades */
  const content: any = props.content;
  const title: string = content.title;
  const list: any = content.list;

  /* Renderización */
  return (
    <React.Fragment>
      <h3 className="mb-3">{title}</h3>
      <dl className="row text-small">
        {list.map((item: any, index: number) => (
          <React.Fragment>
            <dt className="col-1 text-end">
              <Icon icon={item.icon} />
            </dt>
            <dd className="col-11">
              <a href={item.url}>{item.title}</a>
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </React.Fragment>
  );
}
