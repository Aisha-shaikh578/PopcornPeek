import React from 'react'
import SearchBar from './SearchBar'

const Navbar = ({handleInput, handleSearch}) => {
  return (
    <div>
     <SearchBar handleInput={handleInput} handleSearch={handleSearch}/>
    </div>
  )
}

export default Navbar