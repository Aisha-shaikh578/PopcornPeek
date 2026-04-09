import React from 'react'
import Navbar from './Components/Navbar'
import Category from './Components/Category'

const App = () => {
  return (
    <div className='h-screen p-5 md:px-14 lg:px-24 xl:px-35 2xl:px-58 bg-gray-300'>
     <Navbar />
     <Category />
    </div>
  )
}

export default App