import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParcels } from "../slices/parcelsSlice";
import {
  CheckIcon,
  TruckIcon,
  XCircleIcon,
  ArrowPathIcon
} from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import Paginate from "./Paginate";
import BeatLoader from "react-spinners/BeatLoader";



export default function AllOrders() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { parcels, loading } = useSelector((state) => state.parcels);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getParcels(currentPage));
  }, [dispatch,currentPage, setCurrentPage]);

  const parcelPerPage = 5;
	const totalParcels = parcels.length;

	const indexOfLastParcel = currentPage * parcelPerPage;
	const indexOfFirstParcel = indexOfLastParcel - parcelPerPage;
	const filterParcels = parcels.slice(indexOfFirstParcel, indexOfLastParcel);


  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <BeatLoader
          loading={loading}
          color="#4F46E5"
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }


  function singleOrder (e){
    e.preventDefault();
      navigate(`/admin-orders/${e.target.id}`)
  }

  return (
    <div >
      <div className="border-b border-gray-200 flex justify-center gap-4 items-center">
        <h1  className="text-3xl font-bold">
          Your Orders 
        </h1>
        <span><TruckIcon className="h-6 w-7 text-yellow-500"/></span>
      </div>

      <div className="container mx-auto mt-4">
        {filterParcels.map((parcel) => (
          <div key={parcel.id} className="border-b border-gray-200 py-4">
            <h1 onClick={singleOrder} id={parcel.id} className="text-xl underline font-medium leading-6 text-gray-900 mb-2 cursor-pointer">
              {parcel.parcel_name}
            </h1>
            <h1 className="text-lg font-medium leading-6 text-gray-900 mb-2">
              Pick up location: {parcel.pickup_location}
            </h1>
            <h1 className="text-lg font-medium leading-6 text-gray-900 mb-2">
              Destination: {parcel.destination}
            </h1>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-500 font-medium">
                Weight: {parcel.weight}
              </p>
              <p className="text-gray-500 font-medium">Price: {parcel.price}</p>
              <div className="text-gray-500 font-medium flex gap-2">
                <span>Status: {parcel.status.status}</span>
                <span className="flex justify-between items-center">
                  {parcel.status.status === "Delivered" && (
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  )}
                  {parcel.status.status === "In-transit" && (
                    <TruckIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  )}
                  {parcel.status.status === "Cancelled" && (
                    <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  {parcel.status.status === "Pending" && (
                    <ArrowPathIcon className="h-5 w-5 text-red-500 mr-2" />
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
          
            
          

       
          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalParcels={totalParcels}
            parcelPerPage={parcelPerPage}
          />
        
        
      </div>
    </div>
  );
}

