import React from "react";

import Hero from "./sections/Hero";
import Certificate from "./sections/Certificate";
import Service from "./sections/Service";
import Pillar from "./sections/Pillar";
import BelieveUs from "./sections/BelieveUs";
import Portfolio from "./sections/Portfolio";
import Permen from "./sections/Permen";

const Home = () => {
  return (
    <>
      <Hero />
      <Certificate />
      <Permen />
      <Service/>
      <Pillar />
      <BelieveUs />
      <Portfolio />
    </>
  );
};

export default Home;
