import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Category from './Components/Category'
import MovieCard from './Components/MovieCard'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInput = (input) => {
    setSearchTerm(input);
    console.log(searchTerm)
  }

  const handleSearch = () => {
    console.log(searchTerm || '');
  }
  
  return (
    <div className='h-full p-5 md:px-14 lg:px-24 xl:px-35 2xl:px-58 bg-gray-300'>
     <Navbar handleInput={handleInput} handleSearch={handleSearch}/>
     <Category />
     <div className='flex flex-col md:flex-row gap-4 mt-6 justify-center items-center'>
      <MovieCard/>
      <MovieCard />
      <MovieCard />
      <MovieCard />
     </div>
    </div>
  )
}

export default App