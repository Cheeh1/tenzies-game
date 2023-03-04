import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import Die from './Die'
import './App.css'

const App = () => {

 const [dice, setDice] = useState(allNewDice())
 const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You won")
    }
  }, [dice])

 function generateNewDie() {
   return { 
     value: Math.ceil(Math.random() * 6), 
     isHeld: false, 
     id: nanoid()
   }
 }

  function allNewDice() {
    const newDice = []
    for (let i=0; i < 10; i++) {
        newDice.push(generateNewDie())
    }
    return newDice
  }


  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        {...die, isHeld: !die.isHeld} : die
    }))
  }

  const diceElements = dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

  return (
    <>
      <main className='game-container'>
        {tenzies && < Confetti />}
        <div className='game-header'>
          <h1 className='game-title'>Tenzies</h1>
          <p className='game-text'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>

        <div className="game-dice">
          {diceElements}
        </div>

        <button onClick={rollDice} className='game-button'>{tenzies ? "New Game" : "Roll"}</button>
      </main>
    </>
  )
}

export default App
