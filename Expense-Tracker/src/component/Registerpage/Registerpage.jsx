import React, { useReducer } from 'react'
import "../Registerpage/Registerpage.css"
import { Navigate } from 'react-router-dom'

const initial={id:1,name:"",dob:"",address:"",phone:"",pan:"",email:"",password:"",pic:""}

const reducer=(state,action)=>{
    switch (action.type) {
        case "name":{
            return{...state,name:action.payload}
        }
        case "dob":{
            return{...state,dob:action.payload}
        }
        case "address":{
            return{...state,address:action.payload}
        }
        case "phone":{
            return{...state,phone:action.payload}
        }
        case "pan":{
            return{...state,pan:action.payload}
        }
        case "email":{
            return{...state,email:action.payload}
        }
        case "password":{
            return{...state,password:action.payload}
        }
        case "pic":{
            return{...state,pic:action.payload}
        }
           
    
        default:
            return state;
    }
}
const users=JSON.parse(localStorage.getItem("users"))

const Registerpage = () => {
    const[person,dispatch]=useReducer(reducer,initial)

    const handleClick=(e)=>{
        e.preventDefault();
        localStorage.setItem("register",JSON.stringify(person))

    }

  return (
 <>
 {users?(
    <Navigate to={"/home"}/>
 ):(
    <div className='ref-container'>
        
    <form className='reg-form' action="" onSubmit={(e)=>handleClick(e)}>
        <h1>Register</h1>

        <input className='reg-input' type="text"
            name="name"
            onChange={(e)=>dispatch({type:"name",payload:e.target.value})}
            value={person.name} />
       <label htmlFor="" className='reg-label' >Enter name: </label><br/>

       <input type="date" className='reg-input' 
            name="dob"
            value={person.dob}
            onChange={(e)=>dispatch({type:"dob",payload:e.target.value})}/>
       <label htmlFor="" className='reg-label'> Dob :</label><br/>

       <input type="phone" className='reg-input'
            name="phone"
            value={person.phone}
            onChange={(e)=>dispatch({type:"phone",payload:e.target.value})}/>
       <label htmlFor="" className='reg-label' > Phone :  </label><br/>         

       <input type="text" className='reg-input'
            name="pan"
            value={person.pan}
            onChange={(e)=>dispatch({type:"pan",payload:e.target.value})}/>
       <label htmlFor="" className='reg-label'> pan : </label><br/>

       <input type="email" className='reg-input'
            name="email"
            value={person.email} 
            onChange={(e)=>dispatch({type:"email",payload:e.target.value})}/>
        <label htmlFor="" className='reg-label'> Email : </label><br/>

        <input type="password" className='reg-input'
            name="password"
            value={person.password}
            onChange={(e)=>dispatch({type:"password",payload:e.target.value})}/>
        <label htmlFor="" className='reg-label'> password : </label><br/>

        <input type="file" className='reg-input'
            name="pic"
            value={person.pic}
            onChange={(e)=>dispatch({type:"pic",payload:e.target.value})}/>  
        <label htmlFor="" className='reg-label'> photo : </label><br/>
        
        <input type="text" 
            name="address" className='reg-input mb-10 block'
            value={person.address}
            onChange={(e)=>dispatch({type:"address",payload:e.target.value})}/>
        <label htmlFor="" className='reg-label'> address : </label><br/>

        
        
        <input className='reg-btn' type="submit" value={"submit"}/>
    </form>
   </div>
 )}
 </>
  )
}

export default Registerpage