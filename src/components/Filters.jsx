import React, { useState, useEffect } from 'react';
import { DatePicker, Select, Input } from 'antd';

const { Option } = Select;

function Filters({ setFilterData }) {
  const [date, setDate] = useState(null);
  const [option, setOption] = useState(null);
  const [search, setSearch] = useState(null);


  useEffect(() => {
    const filterValues = {
      date: date ? date.format("YYYY-MM-DD") : null,
      option: option,
      search: search,
    };

    setFilterData(filterValues);
    // console.log("Filter values updated:", filterValues); tested if the values are being obtained
  }, [date,option,search]); // Including useEffect and dependencies to prevent re-rendering of the page

  const handleDateChange = (date) => {
    setDate(date);
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
            <div className='px-2'>
              <DatePicker
                className='w-full'
                placeholder='Filter by Date'
                onChange={handleDateChange}
               picker='year'
              />
            </div>

            <div className='px-2'>
              <Select
                className='w-full'
                placeholder='Filter by Type'
                onChange={handleOptionChange}
              >
                <Option value="Signature">Signature</Option>
                <Option value="Standalone">Standalone</Option>
              </Select>
            </div>
          </div>
          <div className='md:ml-4'> 
            <div className='px-2'>
              <Input
                className='w-full md:w-64'
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
