import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  {document.title=`you click button ${count} time`}
  
  return (
    <div className="App">
      <button onClick={()=>setCount(count+1)}>click me {count}</button>
    </div>
  )
}

export default App
