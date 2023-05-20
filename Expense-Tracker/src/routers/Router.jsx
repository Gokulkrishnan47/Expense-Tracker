import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../component/Homepage/Homepage'
import Loginpage from '../component/Loginpage/Loginpage'

const Router = () => {
  return (
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Loginpage/>}/>
    </Routes>
  )
}

export default Router;