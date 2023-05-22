import React, { useState } from 'react'
import "../Loginpage/Loginpage.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Loginpage = () => {

const[login,setLogin]=useState({username:"",password:""})
const Register = JSON.parse(localStorage.getItem("register"));
const users=JSON.parse(localStorage.getItem("users"))

const loginUser=()=>{
if (Register.name===login.username&Register.password===login.password) {
  localStorage.setItem("users",JSON.stringify(login))
  document.getElementById("errorp1").innerHTML=""
  navigator('/home')
}
else{
  document.getElementById("errorp1").innerHTML="Error"
}
}
const navigator=useNavigate()
return (
  <>
  {users ? (
    <Navigate to={"/home"}/>
  ):(
    <div className='login-container'>
      <form action=""onSubmit={(e)=>e.preventDefault()} className='login-form' >
      <h1 className='login-h1'>LOGIN</h1>
      <label htmlFor="Username" className='login-label' >Username</label>
      <input type="text" className='login-input' onChange={(e)=>setLogin({...login,username:e.target.value})}/>
      <p className='error-p1' id='errorp1'></p>
      <label htmlFor="password" className='login-label'>Password</label>
      <input type="password" className='login-input' onChange={(e)=>setLogin({...login,password:e.target.value})}/>
      <button className='login-btn'  onClick={()=>loginUser()}>Login</button>
      <Link to={"/register"} className='login-link'
     >Forget password ?</Link>
      </form>
    </div>
  )}
  </>
    )
}

export default Loginpage;

