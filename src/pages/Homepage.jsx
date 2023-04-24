import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Info from "../components/Info";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "../slices/loggedInUserSlice";
import About from "../components/About";

function Homepage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLoggedInUser());
  }, [dispatch]);
  return (
    <div>
      <Nav />
      <Hero />
      <GetStarted />
      <About />
      <Info />
      <Footer />
    </div>
  );
}

export default Homepage;
