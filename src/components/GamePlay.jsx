import Numberselector from "./Numberselector"
import TotalScore from "./TotalScore"
import './GamePlay.css'
import './StartGame.css'
import RollDice from "./RollDice"
import { useState } from 'react'
import Rules from "./Rules"

const GamePlay = (isOutline) => {
  const [score, setScore] = useState(0);
const [selectedNumber, setSelectedNumber] = useState();
 const [currentDice, setCurrentDice] = useState(1);
const [error, setError] = useState("");
const [showRules, setShowRules] = useState(false);

const generaterandomnumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const roledice = () =>{
  if(!selectedNumber) {
    setError("You Have Not Selected Any Number");
    return;
  }

  setError("");

  const randomnumber = generaterandomnumber(1, 7);
  setCurrentDice( randomnumber);



  if(selectedNumber === randomnumber){
    setScore((prev) => prev + randomnumber);
  }else{
    setScore((prev) => prev - 2);
  }

  setSelectedNumber(undefined);
}

const resetScore= () => {
  setScore(0);
}

  return (
    <main>
       <div className="top_section">
        <TotalScore score={score}/>
       <Numberselector
       error={error}
       setError={setError}
       selectedNumber={selectedNumber}
       setSelectedNumber={setSelectedNumber}
       
       />
       </div>
      <RollDice
      currentDice={currentDice}
      roledice={roledice}
      />
      <div className="btn">
        <button className={` ${isOutline ? 'outline_btn' : ''}`} onClick={resetScore}>Reset</button>
        <button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show" } Rules</button>
      </div>
      {showRules && <Rules/>}
    </main>
  )
}

export default GamePlay