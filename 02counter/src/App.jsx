import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter , setCounter] = useState(1)

  // let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1


    setCounter(counter)
  }

  const removeValue = () => {
    console.log("value Removed", Math.random());

    counter = counter - 1
    setCounter(counter)
  }
  

  return (
    <>
        <h1>Hello React</h1>
        <h2>counter value: {counter} </h2>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="counter" 
          onClick={addValue}>Add value</button>

          <button className="counter"
           onClick={removeValue}>remove value</button>
        </div>
    </>
  )
}

export default App
