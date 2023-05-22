import React, { useReducer } from 'react'
 
const initial={
    id:1,name:"",dob:"",address:"",phone:"",pan:"",email:"",password:"",pic:""
}
const reducer=(state,action)=>{
    switch(action.type){
        case "name":{
            return{...state,name:action.payload}
        }
        case "dob":{
            return{...state,dob:action.payload}
        }
        case "phone":{
            return{...state,phone:action.payload}
        }
        case "address":{
            return{...state,address:action.payload}
        }
    }
}
const Registerpage = () => {
    const [person,dispatch]=useReducer(reducer,initial)
  return (
    <div className='ref-container'>
        <input  className='reg-input' type="text" name="name" value={person.name} onChange={(e)=>dispatch({type:"name",payload:e.target.value})} />
        <label htmlFor="" className='reg-label'>Enter name:</label><br/>

        <input className='reg-input' type="date" name="dob" value={person.dob} onChange={(e)=>dispatch({type:"dob",payload:e.target.value})}/>
        <label htmlFor="" className='reg-label'>Dob:</label><br/>

        <input className='reg-input' type="number" name="phone" value={person.phone} onChange={(e)=>dispatch({type:"phone",payload:e.target.value})} />
        <label htmlFor="" className='reg-label' >Phone:</label><br/>

        <input type="address" name="address" value={person.address} onChange={(e)=>dispatch({type:"address",payload:e.target.value})} />
    </div>
  )
}

export default Registerpage