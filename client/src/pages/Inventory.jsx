import React from 'react';
import Navbar from './Navbar';
import AddItemForm from '../components/AddItemForm';

function Inventory() {
  return (
    <div className='h-screen border bg-gradient-to-r from-gray-400 via-yellow-500 to-indigo-300 md:w-full lg:w-full w-full'>
      <Navbar />
      <AddItemForm/>
    </div>
  );
}

export default Inventory;
