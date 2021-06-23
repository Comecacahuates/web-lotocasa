import * as React from "react";
import Icon from "./icon";

/** Propiedades del componente de elemento de lista */
export interface ListItemProps {
  href?: string;
  icon?: string;
  children: React.ReactNode;
}

/** Componente de elemento de lista */
export default function ListItem(props: ListItemProps) {
  /* Propiedades */
  const href: string | undefined = props.href;
  const icon: string | undefined = props.icon;
  const children: React.ReactNode = props.children;

  /* Renderización */
  return (
    <li className="my-2">
      {/* Ícono */}
      {icon !== undefined ? (
        <React.Fragment>
          <Icon icon={icon} /> {"\u00A0\u00A0"}
        </React.Fragment>
      ) : (
        ""
      )}
      {/* Título */}
      {href !== undefined ? <a href={href}>{children}</a> : children}
    </li>
  );
}
