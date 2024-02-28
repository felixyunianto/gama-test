import React from "react";

import Hero from "./sections/Hero";
import Certificate from "./sections/Certificate";
import Service from "./sections/Service";
import Pillar from "./sections/Pillar";
import BelieveUs from "./sections/BelieveUs";

const Home = () => {
  return (
    <>
      <Hero />
      <Certificate />
      <Service/>
      <Pillar />
      <BelieveUs />
    </>
  );
};

export default Home;
