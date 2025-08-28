import React from 'react'

const Button = () => {
    let count=0;
    const handleclick=(name)=>{
        if(count>3){
            console.log(`${name}click me ${count} time `);
              count++;
        }else{
            console.log(`${name}stop clicking me`);
        }
    }
  return (
    <button onClick={()=>handleclick("j")}> click me </button>
  )
}

export default Button