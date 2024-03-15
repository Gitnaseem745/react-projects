import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useState } from 'react'

// function NewApp(){
//   const [color, setColor] = useState(null)
//   return (
//     <div style={{ backgroundColor: color}}>
//     <button onClick={() => setColor('red')} className='rounded-lg' style={{backgroundColor: 'red'}}>Click me!</button>
//     <button onClick={() => setColor('blue')} className='rounded-lg' style={{backgroundColor: 'blue'}}>Click me!</button>
//     </div>

  // )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <NewApp /> */}
  </React.StrictMode>,
)
