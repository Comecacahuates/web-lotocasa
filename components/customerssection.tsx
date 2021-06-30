import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionContainer from "./ui/sectioncontainer";
import Image from "next/image";
import styles from "./customerssection.module.scss";
import { CustomersSection, Customer } from "../@types/pagestructure";

/** Propiedades del componente de sección de clientes */
export interface CustomersSectionProps {
  customersSection: CustomersSection;
}

/** Componente de sección de clientes */
export default function CustomersSectionUI(props: CustomersSectionProps) {
  /* Propiedades */
  const customersSection: CustomersSection = props.customersSection;
  const title: string | undefined = customersSection.title;
  const list: Customer[] = customersSection.customersList;

  /* Renderización */
  return (
    <SectionContainer title={title}>
      {/* Lista de clientes */}
      <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch justify-content-evenly flex-wrap">
        {list.map((item: Customer, index: number) => (
          <div key={index} className={`my-4 ${styles.customerImageContainer}`}>
            <Image
              src={item.image.src}
              alt={item.image.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
