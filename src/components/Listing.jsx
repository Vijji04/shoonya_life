import React, { useEffect, useState } from 'react';
import ListingCard from './ListingCard';
import Notfound from './Notfound';

function Listing({ filterData }) {
  const [data, setData] = useState([]);
  const [flag,setFlag] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // State for tracking the current page
  const itemsPerPage = 3; // Number of items per page

  useEffect(() => {
    async function getDetails() {
      try {
        // Base URL
        let url = 'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats';

        // Building the query string with filters
        const queryParams = [];

     if (filterData.search)
       {
          queryParams.push(`search=${encodeURIComponent(filterData.search)}`);
        }
         if (filterData.option) {
          queryParams.push(`type=${encodeURIComponent(filterData.option)}`);
        }
        if (filterData.date) {
          queryParams.push(`date=${encodeURIComponent(filterData.date)}`);
        }

        // Add query parameters to URL if any
      if (queryParams.length > 0) {
        url += `?${queryParams.join('&')}`;
      } else {
          url += '?page=1&limit=10'; // Default fetch for the first 10 items
        }

        const response = await fetch(url);


        if(!response.ok)
        {
          setFlag(1);
          throw new Error('Not found')
        }
        const data = await response.json();

      if(data.length === 0)
      { setFlag(1); }
        else{
          setData(data);
          setFlag(0) //reset flag to 0 if there is data again, to showcase data
        }

        
      } catch(error) {
        console.log('No data found',error);
      }
    }

    getDetails();
  }, [filterData]); // Include filterData as a dependency

  // Calculate the current set of items to display
  const currentData = data.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

//USing the manual carousel effect code instead of relying on libraries, animation not added intentionally

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < data.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };


  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      {/* Displaying error messsage if not found by API */}
      {flag ? (<Notfound />) :(
        <div>
             <div className="flex justify-between md:gap-2 lg:gap-4 
             flex-col md:flex-row mt-6 px-8 lg:px-2 xl:ml-4 md:px-4 overflow-hidden max-w-[1400px]">
        {currentData.map((info, index) => (
          <div className="mt-3" key={index}>
            <ListingCard data={info} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-4 mt-4 gap-3">
        <button
          className="bg-primaryColor text-white py-2 px-6 rounded-md"
          onClick={handlePrevious}
          disabled={currentPage === 0} // Disabling Previous button if on the first page
        >
          Previous
        </button>
        <button
          className="bg-primaryColor text-white py-2 px-6 rounded-md"
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= data.length} // Disabling Next button if on the last page
        >
          Next
        </button>
      </div>
      </div>
      )}
        
   
      
    </div>
  );
}

export default Listing;
