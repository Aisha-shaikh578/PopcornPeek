import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Category from './Components/Category'
import MovieCard from './Components/MovieCard'
import { useMovies } from './Hooks/useMovies'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const {movies,isLoading,error} = useMovies(searchTerm);

  const handleInput = (input) => {
    setSearchTerm(input);
    console.log(searchTerm)
  }

  const handleSearch = () => {
    console.log(searchTerm || '');
  }
  
  return (
    <div className='h-full p-5 md:px-14 lg:px-24 xl:px-35 2xl:px-58 bg-gray-300 w-full'>
     <Navbar handleInput={handleInput} handleSearch={handleSearch}/>
     <Category />
     <div className='flex flex-col md:flex-row gap-4 mt-6 justify-center items-center'>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies.map((movie,idx) => {
        return(
         <MovieCard key={idx} movie={movie}/>  
        )
      })}
     </div>
    </div>
  )
}

export default App