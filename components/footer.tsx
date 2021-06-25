import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListItem from "./ui/listitem";
import { FooterItem } from "../@types/pagestructure";
import styles from "./footer.module.scss";

import footerItems from "../content/footer.json";

/* * Componente de pie de página */
export default function Footer() {
  /* Renderización */
  return (
    <footer className={`mt-5 overflow-hidden ${styles.footer}`}>
      <Container fluid="md">
        <Row className="gx-5 py-5" xs={1} sm={2} lg={3}>
          {/* Columnas del pie de página */}
          {footerItems.map((item: FooterItem, index: number) => (
            <Col key={index}>
              <h5 className="py-3">
                {item.link !== undefined ? (
                  <a href={item.link}>{item.title}</a>
                ) : (
                  item.title
                )}
              </h5>
              <ul className="list-unstyled text-small">
                {/* Subelementos de la columna */}
                {item.subitems !== undefined
                  ? item.subitems.map((subitem: any, index: number) => (
                      <ListItem
                        key={index}
                        href={subitem.link}
                        icon={subitem.icon}
                      >
                        {subitem.title}
                      </ListItem>
                    ))
                  : ""}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
}
