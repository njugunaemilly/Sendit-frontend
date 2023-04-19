import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParcels } from "../slices/parcelsSlice";
import { BadgeCheckIcon, ClockIcon, XCircleIcon } from '@heroicons/react/solid'

export default function OrderList() {
  const dispatch = useDispatch();
  const { parcels, loading } = useSelector((state) => state.parcels);
  const { user } = useSelector((state) => state.loggedIn);

  useEffect(() => {
    dispatch(getParcels());
  }, [dispatch]);

  const filteredParcels = parcels.filter((parcel) => parcel.user_id === 3);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (filteredParcels.length === 0) {
    return <div>You have no orders.</div>;
  }

  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Your Orders
        </h3>
      </div>

      <div className = "container mx-auto">
      {filteredParcels.map((parcel) => (
        <div key={parcel.id} className="border-b border-gray-200 py-4">
          <h1 className="text-lg font-medium leading-6 text-gray-900 mb-2">{parcel.parcel_name}</h1>
          <h1 className="text-lg font-medium leading-6 text-gray-900 mb-2">Pick up location: {parcel.pickup_location}</h1>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-500 font-medium">Weight: {parcel.weight}</p>
            <p className="text-gray-500 font-medium">Price: {parcel.price}</p>
            <p className="text-gray-500 font-medium">Status: {parcel.status.status}</p>
          </div>
          <div className="flex justify-between items-center">
            {parcel.status.status === "delivered" && <BadgeCheckIcon className="h-5 w-5 text-green-500 mr-2" />}
            {parcel.status.status === "in-transit" && <ClockIcon className="h-5 w-5 text-yellow-500 mr-2" />}
            {parcel.status.status === "cancelled" && <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />}
          </div>
        </div>
      ))}
      </div>
    </>
  );
}


// import {
//   CheckCircleIcon,
//   ChevronRightIcon,
//   EnvelopeIcon,
// } from "@heroicons/react/20/solid";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getParcels } from "../slices/parcelsSlice";


// // const applications = [
// //   {
// //     parcel: {
// //       name: "Kitusuru - Athi River",
// //       email: "customer@email.com",
// //     },
// //     date: "2020-01-07",
// //     dateFull: "Delivered on January 7, 2020",
// //     stage: "Delivery Address",
// //     href: "#",
// //   },
// //   {
// //     parcel: {
// //       name: "Pangani - Parklands",
// //       email: "customer@email.com",
// //     },
// //     date: "2020-01-07",
// //     dateFull: "January 7, 2020",
// //     stage: "Delivery Address",
// //     href: "#",
// //   },
// //   {
// //     parcel: {
// //       name: "Muthaiga - South C",
// //       email: "ted.fox@example.com",
// //     },
// //     date: "2020-01-07",
// //     dateFull: "January 7, 2020",
// //     stage: "Delivery Address",
// //     href: "#",
// //   },
// // ];

// export default function OrderList() {
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(getParcels());
//   }, [dispatch]);
//   const { parcels, loading } = useSelector((state) => state.parcels);
//   const { user } = useSelector((state) => state.loggedIn);
//   let filtered = []

//   if(!loading) {
//     console.log(parcels);
//     console.log(user.id)
//     const filtered = parcels.filter(parcel =>parcel.user_id === 1)
//     console.log(filtered)
//   }
//   return (
//     <>
//       <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
//         <h3 className="text-lg font-medium leading-6 text-gray-900">
//           Your Orders
//         </h3>
//       </div>

//       {filtered.map((item) => {
//         return (
//           <h1>{item.parcel_name}</h1>
//         )
//       })}

//       {/* <div className="overflow-hidden bg-white shadow sm:rounded-md">
//         <ul role="list" className="divide-y divide-gray-200">

//           {applications.map((application) => (
//             <li key={application.parcel.email}>
//               <a href={application.href} className="block hover:bg-gray-50">
//                 <div className="flex items-center px-4 py-4 sm:px-6">
//                   <div className="flex min-w-0 flex-1 items-center">
//                     <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
//                       <div>
//                         <p className="truncate text-sm font-medium text-indigo-600">
//                           {application.parcel.name}
//                         </p>
//                         <p className="mt-2 flex items-center text-sm text-gray-500">
//                           <EnvelopeIcon
//                             className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
//                             aria-hidden="true"
//                           />
//                           <span className="truncate">
//                             {application.parcel.email}
//                           </span>
//                         </p>
//                       </div>
//                       <div className="hidden md:block">
//                         <div>
//                           <p className="text-sm text-gray-900">
//                             Applied on{" "}
//                             <time dateTime={application.date}>
//                               {application.dateFull}
//                             </time>
//                           </p>
//                           <p className="mt-2 flex items-center text-sm text-gray-500">
//                             <CheckCircleIcon
//                               className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
//                               aria-hidden="true"
//                             />
//                             {application.stage}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <ChevronRightIcon
//                       className="h-5 w-5 text-gray-400"
//                       aria-hidden="true"
//                     />
//                   </div>
//                 </div>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div> */}
//     </>
//   );
// }
