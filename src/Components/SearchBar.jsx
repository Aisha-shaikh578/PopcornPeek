import React, { useState } from 'react'
import User from './User'
import { Search } from 'lucide-react'

const SearchBar = ({handleInput, handleSearch}) => {
  const [input, setInput] = useState('')

  const handleTyping = (e) => {
    setInput(e.target.value);
    handleInput(e.target.value);
  }


  return (
    <div className='flex'>
      <input
        value={input || ''} onChange={handleTyping}
        className='p-2 w-[75vw] rounded outline-none bg-gray-200 relative'
        type="text" placeholder='Search Movies...'
        />
        <Search color='orange' 
        className='absolute right-23 md:right-38 lg:right-52 xl:right-70 2xl:right-110 mt-1.5 cursor-pointer'
        onClick={handleSearch}
        />
      <User />
    </div>
  )
}

export default SearchBar