import React from "react";
import SingleOrderAdmin from "../components/SingleOrderAdmin";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AdminFeed from "../components/AdminFeed";


function AdminSingleOrder() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto"><SingleOrderAdmin /></div>
      <AdminFeed />
      <Footer />
    </div>
  );
}

export default AdminSingleOrder;