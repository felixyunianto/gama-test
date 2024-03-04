import React from "react";
import Hero from "./sections/Hero";
import ServiceList from "./sections/ServiceList";
import { useUtilContext } from "../../context";

const Services = () => {
  const { setLoading } = useUtilContext();

  React.useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500)
  }, []);

  return (
    <>
      <Hero />
      <ServiceList />
    </>
  );
};

export default Services;
