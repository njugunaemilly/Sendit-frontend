import React from "react";

const Paginate = ({
  currentPage,
  setCurrentPage,
  totalParcels,
  parcelPerPage,
}) => {
  const totalPages = Math.ceil(totalParcels / parcelPerPage);

  let pages = [];

  for (let p = 1; p <= totalPages; p++) {
    pages.push(p);
  }

  if (totalParcels <= parcelPerPage) {
    return null;
  } else {
    return (
      <div className="container mx-auto mt-4">
        <div className="flex justify-center">
          <ul className="border border-1 border-gray-600 py-2 px-4 mb-2 rounded-sm">
            {pages.map((page) => (
              <li
                key={page}
                className={`page-item ${
                  page === currentPage
                    ? `border-indigo-800 text-indigo-800`
                    : ""
                } inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-indigo-800  hover:text-indigo-800 `}
                onClick={() => setCurrentPage(page)}
              >
                <button className="page-link">{page}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default Paginate;
