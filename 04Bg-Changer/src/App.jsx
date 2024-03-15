import { useState } from 'react'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className="w-full h-screen duration-200"       style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justfy-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          <button onClick={() => setColor('violet')} className='outline-none px-4 py-1 rounded-lg shadow-lg' style={{backgroundColor: "violet"}}>Light Violet</button>
          <button onClick={() => setColor('skyblue')} className='outline-none px-4 py-1 rounded-lg shadow-lg' style={{backgroundColor: "skyblue"}}>Sky Blue</button>
          <button onClick={() => setColor('lavender')} className='outline-none px-4 py-1 rounded-lg shadow-lg text-black' style={{backgroundColor: "lavender"}}>Lavender</button>
          <button onClick={() => setColor('pink')} className='outline-none px-4 py-1 rounded-lg shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>
        </div>
      </div>
    </div>
    )
}

export default App
