import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/landing';
import OurTeam from './pages/OurTeam';
import Terminal from './pages/Terminal';
import ReachOut from './pages/ReachOut';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Landing />
    <OurTeam />
    <Terminal />
    <ReachOut />

    </>
  )
}

export default App
