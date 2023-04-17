import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Homepage from "./Homepage";
import CreateDelivery from "./CreateDelivery";
import Orders from "./Orders";
import SingleOrder from "./SingleOrder";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "../slices/loggedInUserSlice";

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
      <Route path="/order" element={<SingleOrder />}></Route>
      </Routes>
    </div>
  );
}

export default App;
