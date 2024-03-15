import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15

  function addValue(){
  //  console.log("clicked", counter)
    // counter = counter + 1;
    //  if(counter < 20) {
    //   setCounter(counter + 1)
    //  }
    if (counter < 20) {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    }
    }

  function removeValue() {
    if(counter > 0) {
     setCounter(counter - 1)
    }

  }

  return (
    <>
     <h1>Naseem Ansari</h1>
     <h2>Counter {counter}</h2>

     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value</button>
    {/* <h3>{counter}</h3> */}
    </>
  )
}

export default App
