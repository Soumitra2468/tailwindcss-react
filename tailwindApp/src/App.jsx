import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 text-black text-3xl font-bold p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 mb-5">
  Tailwind Test
</h1>
    <Card userName = "Soumitra" age = {24}/>
    <Card userName = "Rahul" age = {23}/>
    </>
  )
}

export default App
