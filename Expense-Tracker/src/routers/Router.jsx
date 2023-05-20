import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../component/Homepage/Homepage'
import { Suspense } from 'react'

const Register=React.lazy(()=>import('../component/Registerpage/Registerpage'))
const Profile=React.lazy(()=>import('../component/Profilepage/Profilepage'))

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Suspense fallback={<h1>loading...</h1>}>
           <Register/>
        </Suspense>}/>
            <Route path='/profile' element={<Suspense fallback={<h1>loading...</h1>}>
          <Profile/>
        </Suspense>}/>
    </Routes>
  )
}

export default Router