import React from 'react';
import { DatePicker, Form, Select, Input } from 'antd';

function Filters() {
  return (
    // Begin of filters
    <div className='w-full flex justify-center md:justify-between'>
      <Form className='w-full mt-4 md:px-4'>
        <div className='md:flex md:justify-between'>
          <div className='md:flex'>
            <Form.Item
              name="DatePicker"
              className='px-2'
            >
              <DatePicker
                className='w-full'
                placeholder='Filter by Date'
              />
            </Form.Item>

            <Form.Item
              name="Select"
              className='px-2'
            >
              <Select
                className='w-full'
                placeholder='Filter by Type'
              />
            </Form.Item>
          </div>
          <div className='md:ml-4'> {/* Add margin for spacing */}
            <Form.Item
              name="Input"
              className='px-2'
              
            >
              <Input
                className='w-full md:w-64' // Adjust text size and padding
                placeholder='Search retreats by title'
              />
            </Form.Item>
          </div>
        </div>
      </Form>
      
      {/* End of filters */}
           
    </div>
  );
}

export default Filters;



  
