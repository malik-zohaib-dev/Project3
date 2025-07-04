import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {

  const [isGAmeStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <>
    { isGAmeStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay}/>}
  

    </>
  )
}

export default App
