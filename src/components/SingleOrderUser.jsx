import { useDispatch, useSelector } from "react-redux";
import { getParcels } from "../slices/parcelsSlice";
import { useEffect, useRef, useState } from "react";
import Map from "./Map";
import Swal from "sweetalert2";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

export default function SingleOrderUser({ id }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
    libraries: ["places"],
  });
  const dispatch = useDispatch();
  const { parcels, loading } = useSelector((state) => state.parcels);
  const [editLocation, setEditLocation] = useState(false);
  const [location, setLocation] = useState("");
  const locationRef = useRef(null);

  useEffect(() => {
    dispatch(getParcels());
  }, [dispatch]);

  if (loading) {
    return <h2 className="text-2xl text-center mt-2">Loading..</h2>;
  }
  let filteredParcel = [];
  filteredParcel = parcels.filter((parcel) => parcel.id === parseInt(id));

  if (filteredParcel.length === 0) {
    return <h2 className="text-2xl text-center mt-2">Loading..</h2>;
  }

  const handlePlaceChanged = () => {
    const place = locationRef.current.getPlace();
    setLocation(place.formatted_address);
  };

  function cancelOrder() {
    Swal.fire({
      title: "Do you want to cancel the order?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`/statuses/${filteredParcel[0].status.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "Cancelled" }),
        }).then((res) => {
          if (res.ok) {
            Swal.fire("Updated", "", "success");
          } else {
            Swal.fire("Failed", "", "error");
          }
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  function updateLocation(e) {
    e.preventDefault();
    console.log(location);
    fetch(`/parcels/${filteredParcel[0].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location: location }),
    }).then((res) => {
      if (res.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Destination successfully updated",
          showConfirmButton: false,
          timer: 1500,
        });
        setEditLocation(false);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to update destination",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
  return (
    <>
      <div className="border-b border-gray-200 p-5 sm:flex sm:items-center sm:justify-between font-bold text-2xl">
        <h3 className="text-2xl font-medium leading-6 text-gray-900">
          {`${filteredParcel[0].pickup_location} - to - ${filteredParcel[0].destination}`}
        </h3>
        <h3 className="text-2xl font-medium leading-9 text-gray-900">
          Status: {filteredParcel[0].status.status}
        </h3>
      </div>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Delivery Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Parcel Title
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {filteredParcel[0].parcel_name}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Amount Due</dt>
              <dd className="mt-1 text-sm text-gray-900">
                Ksh: {filteredParcel[0].price}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {filteredParcel[0].user.email}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Current location
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {filteredParcel[0].status.location}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Delivery Location
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {`${filteredParcel[0].pickup_location} - to - ${filteredParcel[0].destination}`}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {filteredParcel[0].description}
              </dd>
            </div>
          </dl>
        </div>

        <div className="p-8 flex">
          {filteredParcel[0].status.status === "Pending" && (
            <button
              onClick={cancelOrder}
              type="button"
              className="items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-4"
            >
              Cancel Delivery
            </button>
          )}
          {filteredParcel[0].status.status === "Pending" && (
            <button
              onClick={() => {
                setEditLocation(!editLocation);
              }}
              type="button"
              className="items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-4"
            >
              Edit destination
            </button>
          )}
          {isLoaded && editLocation && (
            <form onSubmit={updateLocation} className="flex gap-4">
              <Autocomplete
                onLoad={(autoComplete) => (locationRef.current = autoComplete)}
                onPlaceChanged={() => handlePlaceChanged()}
              >
                <input
                  type="text"
                  name="pickup_location"
                  id="pickup_location"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </Autocomplete>
              <button
                type="submit"
                className=" items-center rounded border border-transparent bg-slate-600 px-2.5 py-1 text-xs font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-4"
              >
                Save
              </button>
            </form>
          )}
        </div>
      </div>
      <Map
        pickup_location={filteredParcel[0].status.location}
        destination={filteredParcel[0].destination}
      />
    </>
  );
}
