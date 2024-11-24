import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import API from './component/API';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <API />
    </>
  )
}

export default App
