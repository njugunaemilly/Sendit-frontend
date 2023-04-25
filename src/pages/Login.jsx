import React, { useState } from "react";
import Nav from "../components/Nav";
import { FaTruck } from "react-icons/fa";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function login(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your login was successful",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => navigate("/"), 1500);
        } else {
          setErrors(data.errors);
        }
      });
  }
  return (
    <div>
      <Nav />
      <section className="bg-slate-300">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-lg shadow-slate-900 md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-3 sm:p-8">
              <div className="flex justify-between">
                <FaTruck className="text-indigo-500 text-3xl" />
                <h1 className="text-xl font-bold font-serif">Log In</h1>
              </div>
              <form onSubmit={login} className="space-y-3">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="emmanuel_ke"
                    required
                  />
                  {errors.username && (
                    <p className="text-xs text-red-600">{errors.username}!</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={formData.pasword}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                  {errors.password && (
                    <p className="text-xs text-red-600">{errors.password}!</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-500 font-bold font-serif text-gray-800 p-2 rounded-sm"
                >
                  Login
                </button>
              </form>
              <div className=" text-right">
                <Link to="/sign-up" className="text-xs underline text-bold">Or sign-up</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
