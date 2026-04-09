import React from 'react'

const MovieCard = ({ movie }) => {

  return (
    <div className='w-40 h-50 bg-gray-200 p-3 rounded-xl flex flex-col gap-3'>
      <h2>{movie.Title}</h2>
      <h3>{movie.Year}</h3>
        <img src={movie.Poster} alt={movie.Title} className='h-22 md:h-15'/>
    </div>
  )
}

export default MovieCard