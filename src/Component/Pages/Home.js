import React from "react";
import Analytics from "../Analytics";
import Cards from "../Cards";
import Hero from "../Hero";
import Newsletter from "../Newsletter";

function Home() {
  return (
    <div>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default Home;
