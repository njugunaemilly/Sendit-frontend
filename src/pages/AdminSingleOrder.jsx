import React from "react";
import SingleOrderAdmin from "../components/SingleOrderAdmin";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import UserFeed from "../components/UserFeed";

function AdminSingleOrder() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto"><SingleOrderAdmin /></div>
      <UserFeed />
      <Footer />
    </div>
  );
}

export default AdminSingleOrder;