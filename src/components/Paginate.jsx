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
      <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div className="">
          <ul className="">
            {pages.map((page) => (
              <li
                key={page}
                className={`page-item ${
                  page === currentPage
                    ? `active:border-indigo-800 active:text-indigo-800`
                    : ""
                } inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-indigo-800  hover:text-indigo-800 `}
                onClick={() => setCurrentPage(page)}
              >
                <button className="page-link">{page}</button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
};

export default Paginate;
