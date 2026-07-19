import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card  from './components/card'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
        <Card username="sartanpara alpesh" btnText="click me" btnText="submite"/>
        <Card username="Rahul" btnText="visit me "/>
             

    </>
  )
}

export default App
