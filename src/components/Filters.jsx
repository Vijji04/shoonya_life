import React, { useState, useEffect } from 'react';
import { DatePicker, Select, Input } from 'antd';
import moment from 'moment'; //Since data is coming in from API as UNIX timestamp, I am using this library to convert the date.

const { Option } = Select;

function Filters({ setFilterData }) {
  const [unixdate, setUnixDate] = useState(null);
  const [option, setOption] = useState(null);
  const [search, setSearch] = useState(null);


  useEffect(() => {
    const filterValues = {
      date: unixdate ,
      option: option,
      search: search,
    };

    setFilterData(filterValues);
    console.log("Filter values updated:", filterValues); 
    
  }, [unixdate,option,search]); // Including useEffect and dependencies to prevent re-rendering of the page

  const handleDateChange = (date) => {
    if (date) {
      const dateString = date.format('YYYY-MM-DD');

      //I console logged the fetched date and API date in UNIX time stamp,I found that there is a difference of 19800, 
      // I figured,it could be because of difference in timezones and hourly time, 
      // therefore I have added it for every date fetched from filter to a constant 19800 and it seems to work.
       

      const newDate = moment(dateString).unix()+19800; 

    
      setUnixDate(newDate);
    } else {
      setUnixDate(null);
    }
  };
  

  const handleOptionChange = (value) => {
    setOption(value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    // Begin of filters
    <div className='w-full flex justify-center md:justify-between'>
    <div className='w-full mt-4 md:px-4'>
           <div className='md:flex md:justify-between'>
           <div className='md:flex'>
            <div className='px-2 mt-2'>
              <DatePicker
                className='w-full'
                placeholder='Filter by Date'
                onChange={handleDateChange}
               picker='date'
              />
            </div>

            <div className='px-2 mt-2'>
              <Select
                className='w-full'
                placeholder='Filter by Type'
                onChange={handleOptionChange}
              >
                <Option
                 value="Signature">
                  Signature
                  </Option>
                <Option 
                value="Standalone">
                  Standalone
                  </Option>
              </Select>
            </div>
          </div>
          <div className='md:ml-4'> 
            <div className='px-2'>
              <Input
                className='w-full md:w-64 mt-2'
                placeholder='Search retreats by title'
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
       </div>
      
      {/* End of filters */}
    </div>
  );
}

export default Filters;
