import React from 'react'
import User from './User'

const SearchBar = () => {
  return (
    <div className='flex'>
      <input className='p-2 w-[75vw] rounded outline-none bg-gray-200' type="text" placeholder='Search Movies...'/>
      <User />
    </div>
  )
}

export default SearchBar