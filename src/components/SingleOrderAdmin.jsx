import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { getParcels } from "../slices/parcelsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function SingleOrderAdmin({ id }) {
    const [enabled, setEnabled] = useState(false)

    const dispatch = useDispatch();
    const { parcels, loading } = useSelector((state) => state.parcels);
  
    useEffect(() => {
      dispatch(getParcels());
    }, [dispatch]);
  
    if (loading) {
      return <div className="h-screen">Loading...</div>;
    }
    let filteredParcel = [];
    filteredParcel = parcels.filter(
      (parcel) => parcel.id === parseInt(id)
    );
  
    if (filteredParcel.length === 0) {
      return <div className="h-screen">Loading...</div>;
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
            Personal details and recipient.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900">{filteredParcel[0].user.full_name}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Amount Due</dt>
              <dd className="mt-1 text-sm text-gray-900">Ksh: {filteredParcel[0].price}</dd>
            </div>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={classNames(
                enabled ? "bg-indigo-600" : "bg-gray-200",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              )}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={classNames(
                  enabled ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{filteredParcel[0].user.email}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Delivery Location
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
              {`${filteredParcel[0].pickup_location} - to - ${filteredParcel[0].destination}`}
              </dd>
            </div>
            <div>
            <button
              type="button"
              className=" items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-4"
            >
              Edit Location
            </button>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900">
              {filteredParcel[0].description}
              </dd>
            </div>

          </dl>
          <div className="pt-8"><button
              type="button"
              className=" items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-4"
            >
              Cancel Delivery
            </button></div>
  
        </div>
      </div>
    </>
  );
}
