import React from 'react'

const Category = () => {
  return (
    <div className='flex flex-row-reverse'>
      <select className='bg-gray-200 mt-6 px-3 py-2 rounded w-[35vw] md:w-[25vw] outline-orange-400 cursor-pointer'>
        <option value="All" defaultValue>All</option>
        <option value="Recent">Recent</option>
        <option value="Trending">Trending</option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
      </select>
    </div>
  )
}

export default Category
