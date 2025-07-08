import './StartGame.css'

import dice from '../../public/dice.png'

const StartGame = ({toggle}) => {
  return (
  <div class="flex flex-col sm:flex-row md:flex-row p-4 gap-4 py-8">
  <div class="flex sm:p-2  p-4 sm:w-2/4 md:w-3/4 ml-5">
    <img src={dice} alt="Dice" class="w-210 h-150 object-contain" />
  </div>

  <div class="flex flex-col justify-center  p-5 sm:w-3/3 md:w-1/2 gap-4">
    <h1 class=" sm:text-2xl  md:text-8xl font-bold">DICE GAME</h1>
    <button onClick={toggle} class=" self-end  px-12 py-1 mr-4 rounded bg-black text-white text-2xl hover:bg-black">
      PLAY NOW
    </button>
  </div>
</div>

  )
}

export default StartGame