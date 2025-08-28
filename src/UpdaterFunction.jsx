import React from 'react'
import { useState } from 'react'

function UpdaterFunction() {
  const [count,setCount]=useState(0);

  const Decrement =()=>{
       setCount(prev=>count - 1);
  }
  
  const Increment =()=>{
       setCount(prev=>count + 1);
  }
  

   
      
  return (
   <>
   <p>Count:{count}</p>
   <button  onClick={Decrement}>Decrement</button>
    <button  onClick={Increment}>Increment</button>
   </>
  )
}

export default UpdaterFunction