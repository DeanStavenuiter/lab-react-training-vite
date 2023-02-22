import { useState } from "react"

const Dice = () => {

    const [dice, setDice] = useState('dice-empty')
    const diceArr = ['dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6']

    const handleClick = () => {
        const randomDice = diceArr[Math.floor(Math.random()*diceArr.length)]
        setTimeout(() => {
            setDice(randomDice)
        }, 1000);
    }

  return (
    <div>
    <img style={{width: '250px'}} src={`src/assets/images/${dice}.png`} alt="dice" onClick={handleClick}/>
    </div>
  )
}

export default Dice