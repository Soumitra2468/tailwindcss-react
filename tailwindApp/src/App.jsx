import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 text-black text-3xl font-bold p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
  Tailwind Test
</h1>
    </>
  )
}

export default App
