import * as React from "react";

/**
 * Propiedades del componente de horas de atención
 */
export interface OpeningHoursProps {
  /* Contenido */
  content: any;
}

/**
 * Componente de sección de horario de atención
 * @param {OpeningHoursProps} props Propiedades
 * @returns Componente
 */
export default function OpeningHours(props: OpeningHoursProps) {
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
          <React.Fragment key={index}>
            <dt className="col-xs-3 col-sm-2 col-md-4 col-lg-4 col-xl-3">
              {item.days}
            </dt>
            <dd className="col-xs-9 col-sm-10 col-md-8 col-lg-8 col-xl-9">
              {item.hours}
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </React.Fragment>
  );
}
