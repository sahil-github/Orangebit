import React from 'react'
import Orange from './Orange'
import Greeting from './Greeting'
import Button from './Button'
import State from './State'
import UpdaterFunction from './UpdaterFunction'
function App() {
  return (
    <>
    <Orange name="sahil"/>
    <Greeting isLoggedIn={true} username="jay"/>
    <Button />

    <State/>
    <UpdaterFunction />
    </>
  )
}

export default App



