import React from 'react'
import "../Loginpage/Loginpage.css"
import { Link } from 'react-router-dom'
const Loginpage = () => {
return (

    <div className='login-container'>
      <form action=""onSubmit={(e)=>e.preventDefault()} className='login-form' >
      <h1 className='login-h1'>LOGIN</h1>
      <label htmlFor="Username" className='login-label'>Username</label>
      <input type="text" className='login-input'/>
      <label htmlFor="password" className='login-label'>Password</label>
      <input type="password" className='login-input'/>
      <button className='login-btn'>Login</button>
      <Link className='login-link'>Forget password ?</Link>
      </form>
    </div>
    )
}

export default Loginpage;

