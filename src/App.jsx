import React, { useState, UseState } from "react"
import './App.css'
import Die from './Die'

const App = () => {

 const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i=0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  const diceElements = dice.map((die, index) => <Die key={index} value={die} />)

  return (
    <>
      <main className='game-container'>
        <div className='game-header'>
          <h1 className='game-title'>Tenzies</h1>
          <p className='game-text'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>

        <div className="game-dice">
          {diceElements}
        </div>

        <button onClick={rollDice} className='game-button'>Roll</button>
      </main>
    </>
  )
}

export default App
