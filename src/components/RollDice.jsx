import { useState } from 'react'
import './RollDice.css'

const RollDice = ({currentDice, roledice}) => {





  return (
    <div className='dicecontainer' onClick={roledice}>
      <div className='dice'>
      <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Clicl on Dice to Roll</p>
    </div>
  )
}

export default RollDice