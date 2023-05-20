import React, { useEffect, useState } from 'react'
import connect from '../../connect/connect'

const Profilepage = () => {
  const[profile,setProfile]=useState([])

  console.log(profile)
  useEffect(()=>{
    const getuser=async()=>{
      const {data}=await connect.get("/users")
      setProfile(data)
    }
    getuser()
  },[])
  return (
    <div>
     <ul>{profile.map((pro)=>
     <li key={pro.id}>
      <h1>{pro.name}</h1>
      <img src={pro.pic} alt="" />
     </li>)}</ul>
    </div>
  )
}

export default Profilepage