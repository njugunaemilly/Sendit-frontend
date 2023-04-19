import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AllOrders from "../components/AllOrders";

function AdminOrders() {
  return (
    <div>
      <Nav />
      <AllOrders />
      <Footer />
    </div>
  );
}

export default AdminOrders;