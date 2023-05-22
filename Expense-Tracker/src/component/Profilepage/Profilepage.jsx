import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Profilepage = () => {
  
  const profile=JSON.parse(localStorage.getItem("register"))
  const users=JSON.parse(localStorage.getItem("users"))
  
  const navigator=useNavigate()
  const logout=()=>{
    localStorage.removeItem("users")
    navigator('/')
  }
  return (
    <>
    {users?(
      <div>
      <h1>{profile.name}</h1>
     <button onClick={logout}>Logout</button>
    </div>
    ):(
      <Navigate to={"/login"}/>
    )}
    </>
  )
}

export default Profilepage