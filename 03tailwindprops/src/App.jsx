import { useState } from 'react'
import './App.css'
import Card from './components/card/Card'

function App() {
  const [count, setCount] = useState(0)
  let objN = {
    name: 'Naseem',
    age: 19,
    country: 'India' 
  }

 
  function returnObj(obj) {
    console.log(objN)
    obj = objN
    return obj
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl text-bold'  onClick={returnObj} >Naseem Ansari</h1>
    <Card username='Code with Naseem'/>
    <Card username='Naseem Ansari'/>
    <div obj={objN} onClick={returnObj} ></div>
    </>
  )
} 

export default App
