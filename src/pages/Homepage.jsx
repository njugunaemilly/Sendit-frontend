import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Info from "../components/Info";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function Homepage() {
  const {user, loading} = useSelector((state) => state.loggedIn)
  if(!loading){
    console.log(user);
  }
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
