import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Info from "../components/Info";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <Nav />
      <Hero />
      <Info />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default Homepage;
