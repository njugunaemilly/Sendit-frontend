import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.loggedIn);
  const [formData, setFormData] = useState({
    parcel_name: "",
    weight: "",
    price: "",
    pickup_location: "",
    destination: "",
    user_id: user.id,
  });

  const [errors, setErrors] = useState({});

  const weightClasses = [
    { name: "Small", weightRange: { min: 0, max: 5 }, price: 10 },
    { name: "Medium", weightRange: { min: 5, max: 10 }, price: 20 },
    { name: "Large", weightRange: { min: 10, max: 20 }, price: 30 },
  ];

  const [selectedWeightClass, setSelectedWeightClass] = useState(null);

  const handleWeightClassChange = (event) => {
    const weightClassIndex = event.target.value;
    setSelectedWeightClass(weightClasses[weightClassIndex]);
  };

  const weightClassPrice = selectedWeightClass ? selectedWeightClass.price : 0;

  // const [quantity, setQuantity] = useState(1);

  // const handleQuantityChange = event => {
  //   const newQuantity = parseInt(event.target.value);
  //   setQuantity(newQuantity);
  // };

  // const totalPrice = weightClassPrice * quantity;

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
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
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between py-4">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Create a Delivery
        </h3>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
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
                    {errors.full_name && (
                      <span className="text-xs text-red-600">
                        {errors.parcel_name[0]}!
                      </span>
                    )}

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="weight"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Weight Class:
                        <select
                          id="weight"
                          name="weight"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          onChange={handleWeightClassChange}
                        >
                          <option value="">Select a weight class</option>
                          {weightClasses.map((weightClass, index) => (
                            <option key={index} value={index}>
                              {weightClass.name} ({weightClass.weightRange.min}{" "}
                              - {weightClass.weightRange.max} pounds) - $
                              {weightClass.price}
                            </option>
                          ))}
                        </select>
                      </label>
                      {selectedWeightClass && (
                        <p className="text-xs text-blue-500">
                          Selected weight class: {selectedWeightClass.name} (
                          {selectedWeightClass.weightRange.min} -{" "}
                          {selectedWeightClass.weightRange.max} pounds) - $
                          {selectedWeightClass.price}
                        </p>
                      )}

                      {errors.full_name && (
                        <span className="text-xs text-red-600">
                          {errors.parcel_name[0]}!
                        </span>
                      )}

                      <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                        <p className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2 px-3 ">
                          Price: ${weightClassPrice}
                        </p>
                      </div>
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
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Kenya</option>
                        <option>Tanzania</option>
                        <option>Uganda</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Pickup
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        value={formData.pickup_location}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      {errors.full_name && (
                        <span className="text-xs text-red-600">
                          {errors.pickup_location[0]}!
                        </span>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Destination
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />

                      {errors.full_name && (
                        <span className="text-xs text-red-600">
                          {errors.destination[0]}!
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
