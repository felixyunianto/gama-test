import React from "react";
import Hero from "./sections/Hero";
import { SERVICES_LIST } from "../../constant/common";
import ServiceList from "./sections/ServiceList";

const Services = () => {
  return (
    <>
      <Hero />
      <ServiceList />
    </>
  );
};

export default Services;
