import * as React from "react";
import Card from "react-bootstrap/Card";
import Image from "./image";
import {
  CatalogueItem,
  ImageFigure,
  Caption,
} from "../../@types/pagestructure";

/**
 * Propiedades del componente de elemento de catálogo
 */
export interface CatalogueItemProps {
  catalogueItem: CatalogueItem;
}

/** Componente de elemento de catálogo */
export default function (props: CatalogueItemProps) {
  /* Propiedades */
  const catalogueItem: CatalogueItem = props.catalogueItem;
  const image: ImageFigure = catalogueItem.image;
  const caption: Caption = catalogueItem.caption;

  /* Renderización */
  return (
    <Card className="mb-5">
      <Card.Img variant="top" as={Image} imageFigure={image} />
      <Card.Body>
        <Card.Title>{caption.title}</Card.Title>
        <Card.Text>{caption.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
