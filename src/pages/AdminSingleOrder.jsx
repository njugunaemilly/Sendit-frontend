import React from "react";
import SingleOrderAdmin from "../components/SingleOrderAdmin";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AdminFeed from "../components/AdminFeed";
import { useParams } from "react-router-dom"

function AdminSingleOrder() {
  let { id } = useParams();
  return (
    <div>
      <Nav />
      <div className="container mx-auto"><SingleOrderAdmin id={id} /></div>
      <AdminFeed id={id} />
      <Footer />
    </div>
  );
}

export default AdminSingleOrder;