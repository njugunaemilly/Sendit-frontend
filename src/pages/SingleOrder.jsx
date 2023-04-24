import React from "react";
import SingleOrderUser from "../components/SingleOrderUser";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import UserFeed from "../components/UserFeed";
import { useParams } from "react-router-dom";

function SingleOrder() {
  let { id } = useParams();
  return (
    <div>
      <Nav />
      <div className="container mx-auto"><SingleOrderUser id={id} /></div>
      <UserFeed id={id} />
      <Footer />
    </div>
  );
}

export default SingleOrder;
