import React from "react";
import { FaTruck } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../slices/loggedInUserSlice";
import Swal from "sweetalert2";

function Nav() {
  const { user } = useSelector((state) => state.loggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    if (user.id) {
      fetch("/logout", {
        method: "delete",
      }).then((res) => {
        if (res.status === 204) {
          dispatch(logoutUser());
          setTimeout(() => navigate("/"), 1000);
        }
      });
    }
  }

  function orders() {
    if (user.id) {
      if(user.user_type === "Customer"){
        navigate("/orders");
      } else {
        navigate("/all-orders");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "You have to be logged in to see your orders",
        timer: 1500,
      });
      setTimeout(() => navigate("/login"), 1500);
    }
  }
  return (
    <div className="bg-slate-900 p-3 font-serif">
      <ul className="flex flex-row justify-evenly">
        <Link to="/" className="flex gap-2 items-center">
          <span className="text-3xl text-indigo-500">
            <FaTruck />
          </span>
          <h1 className="text-white font-mono font-bold text-xl">SENDIT</h1>
        </Link>
        <Link to="/about" className="text-white">
          About
        </Link>
        <Link to="/contact-us" className="text-white">
          Contact Us
        </Link>
        {user.id && (
          <button onClick={orders} className="text-white">
            {user.user_type === "Customer" ? "Your Orders" : "All Orders"}
          </button>
        )}
        {user.id && (
          <button onClick={logout} className="text-white">
            Log out
          </button>
        )}
        <li className="text-white text-3xl">
          <BiUserCircle />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
