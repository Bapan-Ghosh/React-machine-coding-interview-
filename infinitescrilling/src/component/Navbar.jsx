import React, { useState } from 'react';
import Tabledata from '../component/Tabledata';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (data)=>{
    setSelectedOption(data);
    setDropdownOpen(false);
  }

  return (
    <div>
      <ul className='flex gap-6 bg-green-300'>
        <li><a href="#">File</a> </li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Insert</a></li>
        <li><a href="#">Page Layout</a></li>
        <li><a href="#">Data</a></li>
        <li><a href="#">Review</a></li>
        <li><a href="#">View</a></li>
        <li><a href="#">Help</a></li>
        <li>
          <button
            id='dropdownDefaultButton'
            onClick={toggleDropdown}
            className='text-black bg-green-300 hover:bg-green-300  focus:outline-none focus:ring-green-300 font-medium  text-sm p-1 text-center inline-flex items-center dark:bg-green-300 dark:hover:bg-green-300 '
            type='button'
          >
            choose type
            <svg
              className={`w-2.5 h-2.5 ms-3 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>

          <div
            id='dropdown'
            className={`${
              isDropdownOpen ? 'block' : 'hidden'
            } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
              <li>
                <button onClick={()=>handleOptionClick("users")} className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                  users
                </button>
              </li>
              <li>
                <button onClick={()=>handleOptionClick("products")} className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                products
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      {selectedOption === 'users' && <Tabledata users={"users"}/>}
      {selectedOption === 'products' && <Tabledata users={"products"} cool={"cool"}/>}
    </div>
  );
};

export default Navbar;
