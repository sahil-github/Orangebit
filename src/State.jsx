import React from 'react'
import { useState } from 'react'
import './State.css'; 

const State = () => {
       const  [isOn, setIsON]= useState("on");
       const  [name,setName]=useState("");
       const  [quantity,setQuantity]=useState(1);


       const AC=()=>{
        console.log("switch ac");
        setIsON(a => a === "on"?"off" : "on")
           }
       const handleNameChange =(event)=>{
            setName(event.target.value);

        }
        const handleQuantity=(event)=>{
            setQuantity(event.target.value);
        }
   return (
    <>
      <h2>The AC is {isOn}</h2>
      {/* conditionally apply class */}
      <button 
        onClick={AC} 
        className={isOn === "on" ? "btn-on" : "btn-off"}
      >
        Toggle AC
      </button> 
      <br></br>
      <br></br>
      <input value={name} onChange={handleNameChange}></input>
      <p className='NameChange'>Name:{name}</p><br></br>

      <input value={quantity} onChange={handleQuantity} type='number'></input>
      <p>Quantity:{quantity}</p>
    </>
  );

}


export default State
