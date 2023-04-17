import React from "react";
import SingleOrderUser from "../components/SingleOrderUser";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function SingleOrder() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto"><SingleOrderUser /></div>
      <Footer />
    </div>
  );
}

export default SingleOrder;
