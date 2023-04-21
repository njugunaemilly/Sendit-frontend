
export default function Paginate({ parcelsPerPage, filteredParcels, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(filteredParcels / parcelsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div className="hidden md:-mt-px md:flex">
        <ul>
            {pageNumbers.map(pageNumber => (
                <li className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"key={pageNumber}>
                    <button onClick={() => paginate(pageNumber)} className='page-link'>{pageNumber}</button>
                </li>
            ))}
        </ul>
        </div>  
    </nav>
  )
}