import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../component/Homepage/Homepage'

const Router = () => {
  return (
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    </Routes>
  )
}

export default Router;