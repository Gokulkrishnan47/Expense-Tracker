import React from 'react'
import { Navigate } from 'react-router-dom'

const Addincome = () => {
  const login = JSON.parse(localStorage.getItem("users"));
  return (
    <div>
        {login ? (
       <h1>addincome</h1>
        ):(
            <Navigate to={"/login"}/>
        )}
    </div>
  )
}

export default Addincome