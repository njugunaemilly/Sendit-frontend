import { useDispatch, useSelector } from "react-redux";
import { getParcels } from "../slices/parcelsSlice";
import { useEffect } from "react";
import Map from "./Map";

export default function SingleOrderUser({ id }) {
  const dispatch = useDispatch();
  const { parcels, loading } = useSelector((state) => state.parcels);

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
  return (
    <>
      <div className="border-b border-gray-200 p-5 sm:flex sm:items-center sm:justify-between font-bold text-2xl">
        <h3 className="text-2xl font-medium leading-6 text-gray-900">
          {`${filteredParcel[0].pickup_location} - to - ${filteredParcel[0].destination}`}
        </h3>
        <h3 className="text-2xl font-medium leading-9 text-gray-900">
          {filteredParcel[0].status.status}
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

        {/* Cancellation status */}
        {filteredParcel[0].status.status === "Pending" && (
          <div className="py-8">
            <button
              type="button"
              className="inline-flex ml-6 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2  text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel Delivery
            </button>
          </div>
        )}
      </div>
      <Map
        pickup_location={filteredParcel[0].pickup_location}
        destination={filteredParcel[0].destination}
      />
    </>
  );
}
