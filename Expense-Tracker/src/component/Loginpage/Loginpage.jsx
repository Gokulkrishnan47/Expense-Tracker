import React, { useState } from 'react'
import "../Loginpage/Loginpage.css"
import { Link, Navigate } from 'react-router-dom'
const Loginpage = () => {
  const [login,setLogin]=useState({username:"",password:""})
  const users=JSON.parse(localStorage.getItem("users"))
  const loginuser=()=>{
  localStorage.setItem("users",JSON.stringify(login))
}
  
return (
  <>
  {/* {users?(<Navigate to={""}/>):(  */}
     <div className='login-container'>
      <form action=""onSubmit={(e)=>e.preventDefault()} className='login-form' >
      <h1 className='login-h1'>LOGIN</h1>
      <label htmlFor="Username" className='login-label'>Username</label>
      <input type="text" className='login-input' onChange={(e)=>setLogin({...login,username:e.target.value})}/>
      <label htmlFor="password" className='login-label'>Password</label>
      <input type="password" className='login-input' onChange={(e)=>setLogin({...login,password:e.target.value})}/>
      <button className='login-btn' onClick={()=>loginuser()}>Login</button>
      <Link className='login-link'>Forget password ?</Link>
      </form>
    </div>
    {/* )} */}
  </>
  
    )
}

export default Loginpage;

