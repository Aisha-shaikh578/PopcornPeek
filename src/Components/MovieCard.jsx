import React from 'react'

const MovieCard = ({ movie }) => {

  const handleNewReq = () => {
    console.log('new req');
  }

  return (
    <div 
    className='w-40 h-50 bg-gray-200 p-2 rounded-xl flex flex-col gap-2 relative'
    onClick={handleNewReq}
    >
      <div>
        <h2 className='text-nowrap overflow-hidden text-ellipsis font-bold text-xl'>
          {movie.Title}
        </h2>
        <h3>{movie.Year}</h3>
      </div>
      <div>
        <img src={movie.Poster} alt={movie.Title} className='h-30 object-fill rounded absolute bottom-2.5 w-36'/>
      </div>
    </div>
  )
}

export default MovieCard