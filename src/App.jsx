import './App.css'
import Dice from './Dice'

const App = () => {

  return (
  <>
    <main className='game-container'>
     <div className='game-header'>
        <h1 className='game-title'>Tenzies</h1>
        <p className='game-text'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
     </div>

      <Dice />
      
      <button className='game-button'>Roll</button>
    </main>
  </>
  )
}

export default App
