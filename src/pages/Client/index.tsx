import React from "react";
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
import { useUtilContext } from "../../context";

const Client = () => {
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
      <Gallery />
    </>
  );
};

export default Client;
