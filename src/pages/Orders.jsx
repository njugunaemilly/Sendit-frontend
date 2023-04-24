import React from "react";
import OrderList from "../components/OrderList";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Orders() {
  return (
    <div>
      <Nav />
      <OrderList />
      <Footer />
    </div>
  );
}

export default Orders;
