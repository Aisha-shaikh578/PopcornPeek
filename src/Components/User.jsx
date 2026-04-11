import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Settings from '../Pages/Settings'

const User = () => {
  return (
    <>
    <div className='bg-orange-300 rounded-3xl px-4 mx-[3vw] pt-1.5'>
       <Link to='/settings'> A </Link>
    </div>
    <Routes>
        <Route path='/settings' element={<Settings />}/>
    </Routes>
    </>
  )
}

export default User
