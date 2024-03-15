import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
  <h2> Learning React ! </h2>
)}

const ReactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com/',
    target: '_blank'
    },
  children: 'Click Me To Visit Google'
}

const anotherElement= (
  <a href='http://facebook.github.io/react/' target="_blank">Visit Facebook</a>
)


const anotherUser = 'Azeem Ansari'

const reactElement = React.createElement(
  'a',
  {href:'https://www.freecodecamp.org/'},
  'Learn FreeCodeCamp!',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // anotherElement  
    // reactElement
    // MyApp()
    <App />
  
)
