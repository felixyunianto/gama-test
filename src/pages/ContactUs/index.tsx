import React from "react";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import { useUtilContext } from "../../context";
import Branch from "./sections/Branch";

const ContactUs = () => {
  const { setLoading } = useUtilContext();

  React.useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Hero />
      <Contact />
      <Branch />
    </>
  );
};

export default ContactUs;
