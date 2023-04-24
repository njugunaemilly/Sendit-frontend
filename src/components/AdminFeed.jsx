import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { getParcels } from "../slices/parcelsSlice";

import {
  CheckIcon,
  TruckIcon,
  XCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/20/solid";
import { useEffect } from "react";

const timeline = [
  {
    id: 1,
    content: "Pending",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: ArrowPathIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "In-transit",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: TruckIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 4,
    content: "Delivered",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: CheckIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Cancelled",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: XCircleIcon,
    iconBackground: "bg-red-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserFeed({ id }) {
  const dispatch = useDispatch();
  const { parcels, loading } = useSelector((state) => state.parcels);

  useEffect(() => {
    dispatch(getParcels());
  }, [dispatch]);

  if (loading) {
    return <div className="h-screen">Loading...</div>;
  }
  let filteredParcel = [];
  filteredParcel = parcels.filter((parcel) => parcel.id === parseInt(id));

  if (filteredParcel.length === 0) {
    return <div className="h-screen">Loading...</div>;
  }
  return (
    <div className="flow-root p-24 m-12 border rounded-lg">
      <ul className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">{event.content} </p>
                  </div>
                  <div className="whitespace-nowrap text-sm text-gray-500">
                    <Moment fromNow>
                      {filteredParcel[0].status.updated_at}
                    </Moment>
                    {String(filteredParcel[0].status.status) ===
                      String(event.content) && (
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
