import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../component/Homepage/Homepage'
import { Suspense } from 'react'
import Loadingpage from '../component/Loading/Loadingpage'

const Register=React.lazy(()=>import('../component/Registerpage/Registerpage'))
const Profile=React.lazy(()=>import('../component/Profilepage/Profilepage'))
const Login=React.lazy(()=>import('../component/Loginpage/Loginpage'))
const ExpenseDetails=React.lazy(()=>import('../component/Features/ExpenseDetails/ExpenseDetails'))

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Suspense fallback={<Loadingpage/>}>
           <Register/>
        </Suspense>}/>
            <Route path='/profile' element={<Suspense fallback={<Loadingpage/>}>
          <Profile/>
        </Suspense>}/>
        <Route path='/login' element={<Suspense fallback={<Loadingpage/>}>
          <Login/>
        </Suspense>}/>
        <Route path='/home' element={<Suspense fallback={<Loadingpage/>}>
          <ExpenseDetails/>
        </Suspense>}/>
    </Routes>
  )
}

export default Router