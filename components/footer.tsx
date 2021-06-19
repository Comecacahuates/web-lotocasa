import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "../components/icon";

import footerItems from "../content/footer.json";

/**
 * Componente de pie de página
 * @returns Componente
 */
export default function Footer() {
  /* Renderización */
  return (
    <footer>
      <Container>
        <Row className="gx-5 py-5">
          {/* Columnas del pie de página */}
          {footerItems.map((item: any, index: number) => (
            <Col md={6} lg={4}>
              <h5 className="py-3">
                <a href={item.link}>{item.title}</a>
              </h5>
              <ul className="list-unstyled text-small">
                {/* Subelementos de la columna */}
                {item.subitems.map((subitem: any, index: number) => (
                  <li className="my-2">
                    {subitem.icon !== undefined ? (
                      <React.Fragment>
                        <Icon icon={subitem.icon} /> {"\u00A0\u00A0"}
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    <a href={subitem.link}>{subitem.title}</a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
}
