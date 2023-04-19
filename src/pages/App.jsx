import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Homepage from "./Homepage";
import CreateDelivery from "./CreateDelivery";
import Orders from "./Orders";
import SingleOrder from "./SingleOrder";
import AdminSingleOrder from "./AdminSingleOrder";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "../slices/loggedInUserSlice";
import ContactUs from "./ContactUs";
import AboutPage from "./AboutPage";
import AdminOrders from "./AdminOrders";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLoggedInUser());
  }, [dispatch]);
  return (
    <div >
      <Routes>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/make-order" element={<CreateDelivery />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/orders/:id" element={<SingleOrder />}></Route>
      <Route path="/admin-orders/:id" element={<AdminSingleOrder />}></Route>
      <Route path="/contact-us" element={<ContactUs />}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/all-orders" element={<AdminOrders/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
