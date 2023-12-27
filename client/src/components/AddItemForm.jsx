import React from 'react'

function AddItemForm() {
  return (
   <div className='flex justify-center'>
     <div className='w-10/12 mt-2 rounded-xl h-24 bg-gradient-to-r from-gray-400 via-yellow-500 to-indigo-300 text-center'>
      <h1 className='text-4xl font-bold'>Grocery Management System</h1>
      <button className='rounded-md p-1 w-5/12 mt-3 text-green-800 font-bold text-xl cursor-pointer text-center border border-green-700 no-underline hover:bg-green-700 hover:text-white'>ADD GROCERY</button>
    </div>
   </div>
  )
}

export default AddItemForm