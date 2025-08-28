import React from 'react'

function Greeting(props) {
 
   return (props.isLoggedIn ? <h1 className='welcome-message'>Welcome{props.username} </h1>
    
         :<h1 className='failed-message'>Please Loggin first</h1>);
  
}

export default Greeting