import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/landing';
import OurTeam from './pages/OurTeam';
import Terminal from './pages/Terminal';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Landing />
    <OurTeam />
    <Terminal />

    </>
  )
}

export default App
