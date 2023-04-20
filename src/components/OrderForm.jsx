import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { TruckIcon } from "@heroicons/react/20/solid";

export default function OrderForm() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.loggedIn);

  const [formData, setFormData] = useState({
    parcel_name: "",
    weight: null,
    price: "",
    pickup_location: "",
    destination: "",
    user_id: 0,
    country: "",
  });

  const [errors, setErrors] = useState({});

  const weightClasses = [
    { name: "Class 1", weightRange: { min: 1, max: 10 }, price: 100 },
    { name: "Class 2", weightRange: { min: 11, max: 50 }, price: 200 },
    { name: "Class 3", weightRange: { min: 51, max: 100 }, price: 300 },
    { name: "Class 4", weightRange: { min: 101, max: 200 }, price: 400 },
    { name: "Class 5", weightRange: { min: 201, max: 500 }, price: 500 },
    { name: "Class 6", weightRange: { min: 501, max: 1000 }, price: 600 },
    { name: "Class 7", weightRange: { min: 1001, max: 2000 }, price: 700 },
    { name: "Class 8", weightRange: { min: 2001, max: 3000 }, price: 800 },
    { name: "Class 9", weightRange: { min: 3001, max: 4000 }, price: 900 },
    { name: "Class 10", weightRange: { min: 4001, max: 5000 }, price: 1000 },
    { name: "Class 11", weightRange: { min: 5001, max: 6000 }, price: 1100 },
    { name: "Class 12", weightRange: { min: 6001, max: 7000 }, price: 1200 },
    { name: "Class 13", weightRange: { min: 7001, max: 8000 }, price: 1300 },
    { name: "Class 14", weightRange: { min: 8001, max: 9000 }, price: 1400 },
    { name: "Class 15", weightRange: { min: 9001, max: 10000 }, price: 1500 },
  ];

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function calcweight(e) {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      user_id: user.id,
    }));
    if (e.target.value > 10000) {
      return "The class is not available";
    }
    if (e.target.value === "") {
      return "The class is not available";
    }
    const weight = parseFloat(e.target.value);
    let selectedClass = null;

    for (let i = 0; i < weightClasses.length; i++) {
      const weightClass = weightClasses[i];
      if (
        weight >= weightClass.weightRange.min &&
        weight <= weightClass.weightRange.max
      ) {
        selectedClass = weightClass;
        break;
      }
    }
    setFormData((prevState) => ({
      ...prevState,
      price: selectedClass.price,
      weight: e.target.value,
    }));
  }

  function createOrder(e) {
    e.preventDefault();

    fetch("/parcels", {
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
            title: "Your order has been created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => navigate("/orders"), 1500);
        } else {
          setErrors(data.errors);
        }
      });
  }
  return (
    <>
      <div className="border-b border-gray-200 flex justify-center gap-4 items-center mb-4 p-4">
        <h1 className="text-3xl font-bold">Make a delivery</h1>
        <span>
          <TruckIcon className="h-6 w-7 text-yellow-500" />
        </span>
      </div>

      <div className="sm:mt-0 container mx-auto">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Delivery Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Please provide accurate information for your delivery.
              </p>
            </div>
          </div>

          <div className="mt-5 md:col-span-2 md:mt-4 ">
            <form onSubmit={createOrder} className="space-y-3">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="parcel_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Parcel name
                      </label>
                      <input
                        type="text"
                        name="parcel_name"
                        id="parcel_name"
                        value={formData.parcel_name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter parcel name"
                        required
                      />
                      {errors.parcel_name && (
                        <span className="text-xs text-red-600">
                          {errors.parcel_name[0]}!
                        </span>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country/Region
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Kenya</option>
                        <option>Tanzania</option>
                        <option>Uganda</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="weight"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Weight
                      </label>
                      <input
                        type="number"
                        name="weight"
                        id="weight"
                        onChange={calcweight}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                      {errors.weight && (
                        <span className="text-xs text-red-600">
                          {errors.weight[0]}!
                        </span>
                      )}

                      {formData.price && (
                        <span className="text-xl text-green-600">
                          {`Price: ${formData.price}`}!
                        </span>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="pickup_location"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Pickup
                      </label>
                      <input
                        type="text"
                        name="pickup_location"
                        id="pickup_location"
                        value={formData.pickup_location}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                      
                      {errors.pickup_location && (
                        <span className="text-xs text-red-600">
                          {errors.pickup_location[0]}!
                        </span>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="destination"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Destination
                      </label>
                      <input
                        type="text"
                        name="destination"
                        id="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />

                      
                      {errors.destination && (
                        <span className="text-xs text-red-600">
                          {errors.destination[0]}!
                        </span>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="description"
                          name="description"
                          aria-describedby="description"
                          rows={4}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={""}
                          value={formData.description}
                          onChange={handleInputChange}
                        />
                      </div>
                      {errors.description && (
                        <span className="text-xs text-red-600">
                          {errors.description[0]}!
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}
