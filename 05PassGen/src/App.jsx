import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [pass, setPass] = useState("")
  // useRef hook 
  const passwordRef = useRef(null)
  const passwordGenerator =  useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllow) str += "!@#$%^&*_-+=_{}[]|\\?<>,.;:"
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1) 
      pass += str.charAt(char)
    }
    setPass(pass)
  }, [length, numberAllowed, charAllow, setPass])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 14);
      window.navigator.clipboard.writeText(pass)  
    }, [pass])

  useEffect( () => {
    passwordGenerator()
  }, [length, numberAllowed, charAllow, setPass])

  return (
   <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my- text-blue-400 bg-gray-700">
    <h1 className="text-grey-500 text-xl font-bold underline text-center py-3">
      Password Generator 
    </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        value={pass}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        type="text" />
      <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-centr gap-x-1">
          <input 
          min={6}
          max={14}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          type="range" />
          <label> Length: {length} </label>
        </div>
        <div className="flex items-centr gap-x-1">
        <input 
        defaultChecked={numberAllowed}
        onChange={() => {setnumberAllowed((prev) => !prev)}}
        type="checkbox"
         />
         <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-centr gap-x-1">
        <input 
        defaultChecked={charAllow}
        onChange={() => {setcharAllow((prev) => !prev)}}
        type="checkbox"
         />
         <label htmlFor="Character">Character</label>
        </div>
      </div>
    </div>
   </>
  )
}

export default App
