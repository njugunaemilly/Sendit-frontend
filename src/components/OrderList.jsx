import {
  CheckCircleIcon,
  ChevronRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParcels } from "../slices/parcelsSlice";


const applications = [
  {
    parcel: {
      name: "Kitusuru - Athi River",
      email: "customer@email.com",
    },
    date: "2020-01-07",
    dateFull: "Delivered on January 7, 2020",
    stage: "Delivery Address",
    href: "#",
  },
  {
    parcel: {
      name: "Pangani - Parklands",
      email: "customer@email.com",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Delivery Address",
    href: "#",
  },
  {
    parcel: {
      name: "Muthaiga - South C",
      email: "ted.fox@example.com",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Delivery Address",
    href: "#",
  },
];

export default function OrderList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getParcels());
  }, [dispatch]);
  const { parcels, loading } = useSelector((state) => state.parcels);

  if(!loading) {
    console.log(parcels);
  }
  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Your Orders
        </h3>
      </div>

      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {applications.map((application) => (
            <li key={application.parcel.email}>
              <a href={application.href} className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex min-w-0 flex-1 items-center">
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="truncate text-sm font-medium text-indigo-600">
                          {application.parcel.name}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <EnvelopeIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="truncate">
                            {application.parcel.email}
                          </span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on{" "}
                            <time dateTime={application.date}>
                              {application.dateFull}
                            </time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <CheckCircleIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                              aria-hidden="true"
                            />
                            {application.stage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
