import React, { useEffect, useState } from 'react';
import ListingCard from './ListingCard';

function Listing({ filterData }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // State for tracking the current page
  const itemsPerPage = 3; // Number of items per page

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await fetch(
          'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=1&limit=10'
        );
        const data = await response.json();
        setData(data);
      } catch {
        console.log('No data found');
      }
    }

    getDetails();
  }, []);

  // Calculate the current set of items to display
  const currentData = data.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  // Handle Next button click
  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < data.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Handle Previous button click
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="flex md:gap-4 flex-col md:flex-row mt-6 px-8 overflow-hidden max-w-[1430px]">
        {currentData.map((info, index) => (
          <div className="mt-3"  key={index} >
            <ListingCard data={info} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-4 mt-4 gap-3">
        <button
          className="bg-primaryColor text-white py-2 px-6 rounded-md"
          onClick={handlePrevious}
          disabled={currentPage === 0} // Disable Previous button if on the first page
        >
          Previous
        </button>
        <button
          className="bg-primaryColor text-white py-2 px-6 rounded-md"
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= data.length} // Disable Next button if on the last page
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Listing;
