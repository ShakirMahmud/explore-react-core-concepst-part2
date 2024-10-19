
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
function handleClicked(){
  alert('buttonClicked')
}
const handleClicked2 = () =>{
  alert('button2Clicked')
}
const addToFive=(num)=>{
  alert(num+5);
}

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      
      <button onClick={handleClicked}>Click Me!</button>
      <button onClick={handleClicked2}>Click Me too!</button>
      <button onClick={()=>{alert('button3Clicked')}}>Click Me too!</button>
      {/* cannot send parameter directly to this is the way  */}
      <button onClick={()=>{addToFive(3)}}>Click Me too!</button>
    </>
  )
}

export default App
