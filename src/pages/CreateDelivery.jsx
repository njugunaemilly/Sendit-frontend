import React from "react";
import OrderForm from "../components/OrderForm";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HeadlineCards from "../components/HeadlineCards";

function CreateDelivery() {
  return (
    <div>
      <Nav />
      <OrderForm />
      <HeadlineCards />
      <Footer />
    </div>
  );
}

export default CreateDelivery;
