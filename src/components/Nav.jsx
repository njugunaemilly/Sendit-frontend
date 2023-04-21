import React, { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../slices/loggedInUserSlice";
import Swal from "sweetalert2";
import DropdownProfile from "./DropdownProfile";

function Nav() {
  const { user } = useSelector((state) => state.loggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

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
      if (user.user_type === "Customer") {
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

        {/* Hamburger */}
        <div onClick={handleClick} className="z-10 inline-flex text-indigo-500 text-3xl justify-center gap-x-1.5  hover:bg-gray-200" id="menu-button" aria-expanded="true" aria-haspopup="true">
          {!nav ? <BiUserCircle /> : <BiUserCircle />}
        </div>
      </ul>
      {/* Dropdown menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            
        }
        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"
      >
        <li className="text-gray-200 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
          <Link
            onClick={() => setNav(false)}
            to="/"
            smooth={true}
            duration={500}

          >
            Home
          </Link>
        </li>
        <li className="text-gray-200 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
          <Link
            onClick={() => setNav(false)}
            to="/about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <button onClick={logout} class="text-gray-200 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
            Log out
        </button>
      </ul>
    </div>
  );
}

export default Nav;
