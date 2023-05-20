import React from 'react'
import money from '../../img/expense.jpg'
// import piggy from "../../img/piggy bank.jpg"
import '../Homepage/Homepage.css'
import { Link } from 'react-router-dom'
const Front = () => {
  return (
    <div className='front-container'>
        <div className='front-parent'>
        <img src={money} alt="" className='front-img center'/>
        </div>
        <div>
        <h2 className='front-heading center'>Save Your money With <br/>Expense Tracker </h2>
        <p className='front-para center'>Save money! The more Your money <br/> works for you, the less you have to <br/> work for money.</p>
        </div>
        <div className='front-parent'>
        <Link to='/login'> <button className='front-btn'>Let's Start</button></Link>
        </div>
        
    </div>
  )
}

export default Front